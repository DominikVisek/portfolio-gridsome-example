<template>
    <div>
        <header id="header" class="w-full h-12 fixed z-20 ">
            <nav class="w-full bg-black text-white flex flex-wrap items-center md:h-24 md:bg-gray-900">
                <div class="flex-shrink flex items-center ml-3 h-12 font-sans block">
                    <h2 class="font-bold uppercase text-lg md:text-2xl ml-8">{{ $static.metaData.siteName }}</h2>
                </div>
                <div class="flex-grow block"></div>
                <div class="flex-shrink m-3 md:hidden">
                    <button class="flex items-center px-3 py-2 rounded" @click="isMenuExpanded = !isMenuExpanded">
                        <svg v-if="! isMenuExpanded" class="fill-current h-5 w-5" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                        <span class="font-extrabold text-md uppercase" v-else>X</span>
                    </button>
                </div>

                <div class="w-full flex-grow bg-white text-gray-800 uppercase md:flex md:w-auto md:justify-end md:bg-gray-900 md:text-white md:mr-4"
                     v-bind:class="{'hidden': ! isMenuExpanded}">
                    <div class="text-xs md:flex">
                        <a class="block border-b py-3 px-5 font-sans font-bold md:border-none" v-for="menuItem in menuItems"
                           :href="menuItem.url">{{menuItem.name}}</a>
                    </div>
                </div>
            </nav>
        </header>

        <section id="content" class="w-full bg-gray-100">
            <slot/>
        </section>

        <footer class="bg-beige text-center py-20">
            <div>
                <h1 class="font-extrabold text-3xl font-serif tracking-tight">{{ $static.metaData.siteName }}.</h1>
            </div>
            <div class="flex justify-center text-gray-700">
                <img class="pl-2 py-4" src='https:icon.now.sh/lock/24' alt='chevron icon'/>
                <img class="pl-2 py-4" src='https:icon.now.sh/lock/24' alt='chevron icon'/>
                <img class="pl-2 py-4" src='https:icon.now.sh/lock/24' alt='chevron icon'/>
                <img class="pl-2 py-4" src='https:icon.now.sh/lock/24' alt='chevron icon'/>
                <img class="pl-2 py-4" src='https:icon.now.sh/lock/24' alt='chevron icon'/>
            </div>
            <div class="text-gray-600 text-xs text-center">
                <p class="uppercase tracking-wider">Copyright Dominik Víšek 2019. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>

<static-query>
    query {
    findPages {
    result {
    id
    textwis
    headline
    }
    },
    metadata {
    siteName
    }
    }
</static-query>

<script>
    import Dropdown from '../components/Dropdown'

    export default {
        name: 'app',
        data: function () {
            return {
                isMenuExpanded: false,
                menuItems: [
                    {name: "Home", url: "#"},
                    {name: "About", url: "#"},
                    {name: "Service", url: "#"},
                    {name: "Gallery", url: "#"},
                    {name: "Blog", url: "#"},
                    {name: "Contact", url: "#"},
                ]
            };
        },
        methods: {},
        components: {
            Dropdown
        }
    }
</script>
