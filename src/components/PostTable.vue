<template>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Text</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="!this.posts.length">
                <td colspan="100%">No posts</td>
            </tr>
            <tr
                v-for="post in posts"
                :key="post.id"
            >
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ getTextPreview(post.body) }}</td>
                <td>
                    <div class="table__actions">
                        <u-button-action
                            class="table__action button-edit"
                            @:click="$emit('edit', post.id)"
                        >Edit</u-button-action>
                        <u-button-action
                            class="table__action button-info"
                            @:click="$emit('show', post.id)"
                        >Details</u-button-action>
                        <u-button-action
                            class="table__action button-delete"
                            @:click="$emit('delete', post.id)"
                        >Delete</u-button-action>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: 'PostTable',
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {
        getTextPreview(text) {
            return (text.length > 300) ? text.substring(0, 300) + '...' : text;
        }
    },
}
</script>
<style scoped>
.table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.table th {
    font-weight: 500;
}

.table th,
.table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #dddddd;
}

.table tr:nth-last-of-type(even) {
    background-color: #f3f3f3;
}

.table__actions {
    display: flex;
    flex-wrap: nowrap;
}

.table__action:not(:last-of-type) {
    margin-right: 5px;
}
</style>