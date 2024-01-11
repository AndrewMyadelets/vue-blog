<template>
    <ul
        class="pagination"
        v-if="showComponent"
    >
        <li
            class="pagination__item"
            :class="{ 'pagination__item--disabled': currentPage === 1 }"
            @click="$emit('change', currentPage - 1)"
        >&lt; Previous</li>

        <li
            class="pagination__item"
            v-if="pagesRange.start > 1"
            @click="$emit('change', 1)"
        >1</li>
        <li
            class="pagination__dots"
            v-if="pagesRange.start > 2"
        >...</li>

        <li
            class="pagination__item"
            v-for="page in pagesToShow"
            :key="page"
            :class="{ 'pagination__item--active': currentPage === page }"
            @click="$emit('change', page)"
        >{{ page }}</li>

        <li
            class="pagination__dots"
            v-if="pagesRange.end < totalPages - 1"
        >...</li>
        <li
            class="pagination__item"
            v-if="pagesRange.end < totalPages"
            @click="$emit('change', totalPages)"
        >{{ totalPages }}</li>

        <li
            class="pagination__item"
            :class="{ 'pagination__item--disabled': currentPage === totalPages }"
            @click="$emit('change', currentPage + 1)"
        >Next ></li>
    </ul>
</template>
  
<script>
export default {
    name: 'UPagination',
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalItems: {
            type: Number,
            required: true
        },
        itemsPerPage: {
            type: Number,
            required: true
        },
        pagesToShowCount: {
            type: Number,
            default: 5
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        },
        showComponent() {
            return this.totalPages > 1;
        },
        pagesRange() {
            let { currentPage, pagesToShowCount, totalPages } = this;

            let start = 0;
            let end = 0;

            if (totalPages < pagesToShowCount) {
                start = 1
                end = totalPages
            } else {
                start = Math.ceil(currentPage - (pagesToShowCount - 1) / 2);
                end = Math.ceil(currentPage + (pagesToShowCount - 1) / 2);
                if (start < 1) {
                    start = 1;
                    end = pagesToShowCount;
                }
                if (end > totalPages) {
                    end = totalPages;
                    start = (totalPages - pagesToShowCount) + 1;
                }
            }

            return { start, end };
        },
        pagesToShow() {
            const pages = [];

            for (let i = this.pagesRange.start; i <= this.pagesRange.end; i++) {
                pages.push(i);
            }

            return pages;
        },
    },
    watch: {
        totalPages(newValue) {
            if (newValue > 0 && newValue < this.currentPage) this.$emit('change', newValue);
        },
    }
};
</script>
  
<style scoped>
.pagination {
    display: flex;
    align-items: center;
    width: 100%;
}

.pagination__item {
    padding: 0 10px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-wrap: nowrap;
    background-color: #fff;
    color: #0071f0;
    border: 1px solid #0071f0;
    border-radius: 5px;
}

.pagination__item:not(:last-of-type) {
    margin-right: 5px;
}

.pagination__dots {
    margin-right: 5px;
    padding: 0 5px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-wrap: nowrap;
    background-color: #fff;
    color: #0071f0;
}

.pagination__item:hover {
    cursor: pointer;
    background-color: #007bffd1;
    color: #fff;
}

.pagination__item--active {
    pointer-events: none;
    background-color: #0071f0;
    color: #fff;
}

.pagination__item--disabled {
    pointer-events: none;
    color: rgb(212, 212, 212);
    border-color: rgba(118, 118, 118, 0.3);
}
</style>