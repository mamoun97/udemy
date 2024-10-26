import Layout from '@/components/layout'
import { Button, Checkbox, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export default function Register() {
    return (
        <div>
            <Layout >
                <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                    <div className='flex justify-end max-sm:justify-center'>
                        <img src={"https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp"}
                            alt=''
                            className='w-full max-w-2xl '
                        />
                    </div>
                    <div>
                        <form className=''>
                            <div className="flex flex-col mt-12  max-w-md gap-2 mx-auto p-4 ">
                                <h1 className='text-2xl mb-4 text-center  font-bold'>Inscrivez-vous et commencez à apprendre</h1>

                                <Input type="text"
                                    variant='flat' label="Name"
                                    placeholder="Enter your full name" fullWidth />

                                <Input type="email"
                                    variant='flat' label="Email"
                                    placeholder="Enter your email" fullWidth />

                                <Input type="password"
                                    variant='flat' label="Password"
                                    placeholder="Enter your password" fullWidth />
                                <Checkbox defaultSelected size="lg" className=''
                                    classNames={{
                                        label: "text-foreground-700 text-sm"
                                    }}
                                >
                                    Je souhaite recevoir des offres spéciales, des recommandations personnalisées et des conseils d'apprentissage.
                                </Checkbox>
                                <Button color="primary" variant="solid" fullWidth>
                                    Sign up
                                </Button>

                                <div className='flex items-center gap-2 my-6 text-center '>
                                    <span className='text-center text-xs'>

                                        En vous inscrivant, vous acceptez nos
                                        <Link href={"/auth/login"} className='text-primary mx-1'> Conditions d'utilisation</Link>
                                        et notre
                                        <Link href={"/auth/login"} className='text-primary mx-1'>Politique de confidentialité.</Link>
                                    </span>
                                </div>


                                <div className='text-center text-sm mt-6'>
                                    <span className='text-center'>
                                        Vous avez déjà un compte ? <Link href={"/auth/login"} className='text-primary'>Se connecter</Link>

                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
