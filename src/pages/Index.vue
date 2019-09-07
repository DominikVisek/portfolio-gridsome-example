<template>
    <Layout>
        <div>
            <div class="bg-homepage-image h-screen text-white ">
                <div class="relative flex-grow flex w-full items-center h-full">
                    <div class="absolute bg-black opacity-50 inset-0 z-0"></div>
                    <div class="relative flex-grow flex w-full items-end">
                        <div class="flex-grow text-center font-sans font-bold relative z-10">
                            <h4 class="md:text-3xl">Hello !</h4>
                            <h2 class="text-3xl mb-6 md:text-6xl"><typer v-bind:typed-texts="['Who am i?', 'I am developer', 'designer', 'photograph']"></typer></h2>
                            <ul class="list-disc uppercase text-left inline-block tracking-wider text-sm flex items-center justify-center flex-wrap">
                                <li class="ml-8">Photographer</li>
                                <li class="ml-8">Designer</li>
                                <li class="ml-8">Developer</li>
                            </ul>
                        </div>
                        <div class="flex-shrink justify-center flex flex-col z-10">
                            <div class="h-32 w-12 relative flex items-center justify-center">
                                <div class="absolute border-l border-white h-full"></div>
                            </div>
                            <img class="py-2" src='https:icon.now.sh/lock/17/ffffff' alt='chevron icon'/>
                            <img class="py-2" src='https:icon.now.sh/lock/17/ffffff' alt='chevron icon'/>
                            <img class="py-2" src='https:icon.now.sh/lock/17/ffffff' alt='chevron icon'/>
                            <img class="py-2" src='https:icon.now.sh/lock/17/ffffff' alt='chevron icon'/>
                            <img class="py-2" src='https:icon.now.sh/lock/17/ffffff' alt='chevron icon'/>
                            <div class="h-32 w-12 relative flex items-center justify-center">
                                <div class="absolute border-l border-white h-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white w-full relative mt-6 px-4">
                <h4 class="text-center uppercase text-2xl font-bold m-12 md:text-3xl">About me</h4>
                <div class="w-full md:flex md:w-10/12 md:items-center md:justify-center md:m-auto">
                    <g-image class="md:w-1/2" src="~/assets/images/slider-image.png"/>
                    <div class="">
                        <h2 class="text-left text-4xl font-semibold leading-none md:text-3xl">Hello, I,m anowar hossain the photographer</h2>
                        <div class="mt-6 text-gray-550 text-sm md:text-">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed eiusmo temp inse incidiei dunt ut labore et dolore magna aliqua.
                                    One enimes ad minim veniam, quis labor nostrud exeracita aation ullamco laboris nisi
                                    ut aliquip ex ea commodo in the consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse aliquip
                                </p>
                            </div>
                            <div class="mt-5 -mx-2">
                                <div class="flex flex-wrap">
                            <span class="flex">
                                <img class="px-2" src='https:icon.now.sh/email/999999' alt='email icon'/> <b class="pr-1">Email: </b> example@gmail.com
                            </span>
                                    <span class="flex">
                                <img class="px-2" src='https:icon.now.sh/phone/999999' alt='phone icon'/> <b class="pr-1">Phone:</b> +880 458 0124 325
                            </span>
                                </div>
                                <div class="flex flex-wrap mt-1">
                            <span class="flex">
                                <img class="px-2" src='https:icon.now.sh/location_on/999999' alt='location icon'/> <b class="pr-1">Location:</b> Kurigram, Bangladesh
                            </span>
                                    <span class="flex">
                                <img class="px-2" src='https:icon.now.sh/language/999999' alt='language icon'/> <b class="pr-1">Website:</b> www.example.bd
                            </span>
                                </div>
                            </div>
                            <div class="mt-6 flex flex-wrap">
                        <span class="flex mr-5 mt-4">
                            <button-link text="READ MORE" url="#"></button-link>
                        </span>
                                <span class="flex mt-4">
                             <button-link text="DOWNLOAD CV" url="#"></button-link>
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white w-full relative mt-40 px-4">
                <h4 class="text-center uppercase text-2xl font-bold m-12 md:text-3xl">My skill</h4>
                <div class="w-full md:w-10/12 md:flex md:flex-wrap md:items-center md:justify-center md:m-auto">
                    <div class="w-11/12 mt-12 md:w-5/12">
                        <skill-progress-bar class="md:pr-4" v-bind:percentage=95 title="Web Design"></skill-progress-bar>
                    </div>
                    <div class="w-11/12 mt-12 md:w-5/12">
                        <skill-progress-bar class="md:pl-4" v-bind:percentage=85 title="Web Development"></skill-progress-bar>
                    </div>
                    <div class="w-11/12 mt-12 md:w-5/12">
                        <skill-progress-bar class="md:pr-4" v-bind:percentage=90 title="PHP & MySQL"></skill-progress-bar>
                    </div>
                    <div class="w-11/12 mt-12 md:w-5/12">
                        <skill-progress-bar class="md:pl-4" v-bind:percentage=70 title="SEO Marketing"></skill-progress-bar>
                    </div>
                    <div class="w-11/12 mt-12 md:w-5/12">
                        <skill-progress-bar class="md:pr-4" v-bind:percentage=62 title="Photography"></skill-progress-bar>
                    </div>
                    <div class="w-11/12 mt-12 md:w-5/12">
                        <skill-progress-bar class="md:pl-4" v-bind:percentage=68 title="Online Marketing"></skill-progress-bar>
                    </div>
                </div>
            </div>

            <div class="bg-white w-full relative mt-40 px-4">
                <h4 class="text-center uppercase text-2xl font-bold m-12 md:text-3xl">Service</h4>

                <div class="md:flex md:w-10/12 md:m-auto md:flex-wrap md:items-center md:justify-center">
                    <basic-box class="md:w-1/3" title="Web Design">
                        <template slot="iconSlot">
                            <img class="flex-shrink" src='https:icon.now.sh/email/999999/45' alt='email icon'/>
                        </template>
                        <template slot="text">Lorem ipsum dolor sit amet, conse adipisi elit,
                            sed do eiusmod incididunt awesome. morem is the creative service
                        </template>
                    </basic-box>
                    <basic-box class="md:w-1/3" title="Web Design">
                        <template slot="iconSlot">
                            <img class="flex-shrink" src='https:icon.now.sh/email/999999/45' alt='email icon'/>
                        </template>
                        <template slot="text">Lorem ipsum dolor sit amet, conse adipisi elit,
                            sed do eiusmod incididunt awesome. morem is the creative service
                        </template>
                    </basic-box>
                    <basic-box class="md:w-1/3" title="Web Design">
                        <template slot="iconSlot">
                            <img class="flex-shrink" src='https:icon.now.sh/email/999999/45' alt='email icon'/>
                        </template>
                        <template slot="text">Lorem ipsum dolor sit amet, conse adipisi elit,
                            sed do eiusmod incididunt awesome. morem is the creative service
                        </template>
                    </basic-box>
                    <basic-box class="md:w-1/3" title="Web Design">
                        <template slot="iconSlot">
                            <img class="flex-shrink" src='https:icon.now.sh/email/999999/45' alt='email icon'/>
                        </template>
                        <template slot="text">Lorem ipsum dolor sit amet, conse adipisi elit,
                            sed do eiusmod incididunt awesome. morem is the creative service
                        </template>
                    </basic-box>
                    <basic-box class="md:w-1/3" title="Web Design">
                        <template slot="iconSlot">
                            <img class="flex-shrink" src='https:icon.now.sh/email/999999/45' alt='email icon'/>
                        </template>
                        <template slot="text">Lorem ipsum dolor sit amet, conse adipisi elit,
                            sed do eiusmod incididunt awesome. morem is the creative service
                        </template>
                    </basic-box>
                    <basic-box class="md:w-1/3" title="Web Design">
                        <template slot="iconSlot">
                            <img class="flex-shrink" src='https:icon.now.sh/email/999999/45' alt='email icon'/>
                        </template>
                        <template slot="text">Lorem ipsum dolor sit amet, conse adipisi elit,
                            sed do eiusmod incididunt awesome. morem is the creative service
                        </template>
                    </basic-box>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import ButtonLink from '../components/ButtonLink';
    import SkillProgressBar from '../components/SkillProgressBar';
    import BasicBox from '../components/BasicBox';
    import Typer from '../components/Typer';
    // import CountUp from '../components/CountUp';

    export default {
        metaInfo: {
            title: 'Hello, world!'
        },
        components: {
            ButtonLink,
            SkillProgressBar,
            BasicBox,
            Typer,
            // CountUp
        }
    }
</script>