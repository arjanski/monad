<template>
    <div class="relative w-64 ml-3 flex-shrink-1 lg:ml-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-width="2" stroke="currentColor">
                </path>
            </svg>
        </span> 
        <input placeholder="Search" class="block w-full py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-600 border border-gray-400 rounded-md">
    </div>
</template>

<script>
export default {
 name: 'InputSearch'   
}
</script>