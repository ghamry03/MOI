<template>
    <div class="flex justify-between">
        <div class=" flex items-center gap-4 topBarFont sm:text-xs md:text-base overflow-x-auto scroll-smooth">
            <li v-for="item in navItems" :key="item.id" :class="{ selected: item.id === selectedItemId }">
                <a @click="selectItem(item.id)">{{ item.name }}</a>
            </li>
        </div>
        <div class="search flex">
            <img src="@/assets/svgs/search.svg" alt="Search icon" class="search-icon" />
            <input type="text" placeholder="Search service" class="search-input overflow-auto" />
        </div>
    </div>
</template>

<style scoped>
.search-input {
    border: none;
    outline: none;
    font-family: "SF Pro Text";
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    flex-grow: 1;
}

a {
    color: var(--gold-color);
}

li {
    display: inline-block;
    list-style: none;
    transition: transform 0.1s ease, color 0.1s ease, background-color 0.1s ease, font-style 0.1s ease, font-weight 0.1s ease, padding 0.1s ease;
}

.unselected {
    color: var(--Gold, #DCBA6A);

    /* Nav Bar */
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
}

.selected {
    color: var(--gold-highlight, #CF9F30);

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    padding-left: 4px;
    padding-right: 4px;
}

.search {
    color: #7A7878;
    background-color: var(--dark-white);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 20px;

    padding: 4px 12px;
    align-items: center;
    gap: 8px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>


<script>
export default {
    data() {
        return {
            navItems: [
                { id: 0, name: 'General Services', link: '/' },
                { id: 1, name: 'Traffic & Licensing', link: '/' },
                { id: 2, name: 'Civil Defense', link: '/' },
                { id: 3, name: 'Crime Security', link: '/' },
                { id: 4, name: 'Policing General Head Quarter', link: '/' },
                { id: 5, name: 'Punitive and Reformatory', link: '/' },
            ],
            selectedItemId: 0
        }
    },
    created() {
        this.fetchNavItems();
    },
    methods: {
        async fetchNavItems() {
            try {
                const response = await fetch('https://api.example.com/navbar');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.navItems = data.navItems || this.navItems;
            } catch (error) {
                console.error('Error fetching navbar items:', error);
            }
        },
        selectItem(itemId) {
            this.selectedItemId = itemId; // Update the selected item ID
        }
    }
}
</script>
