class Github {
    constructor() {
     this.client_id = 'a2a4f3760553653eb926';
     this.client_secret = '6f472539d6054010a182ad8d5d02bbe8845090a7';
     this.repos_count = 5;
     this.repos_sort = 'created: asc'   
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}