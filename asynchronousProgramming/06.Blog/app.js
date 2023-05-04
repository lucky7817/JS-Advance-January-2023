function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);

    let posts = [];

    async function loadPosts() {
        try {
            let url = 'http://localhost:3030/jsonstore/blog/posts';
            let respons = await fetch(url);
            if (!respons.ok) throw new Error();
            let data = await respons.json();

            document.getElementById('posts').innerHTML = '';

            Object.entries(data).forEach(([key, value]) => {
                let optionEl = document.createElement('option');
                optionEl.value = key;
                optionEl.textContent = value.title;
                document.getElementById('posts').appendChild(optionEl);
                posts.push({ title: value.title, body: value.body });
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function viewPost() {
        try {
            let selectedEl = document.getElementById('posts');
            let url = 'http://localhost:3030/jsonstore/blog/comments';
            let res = await fetch(url);
            if (!res.ok) throw new Error();
            let data = await res.json();

            let comments = Object.values(data).filter(el => el.postId === selectedEl.value);

            document.getElementById('post-title').textContent = selectedEl.selectedOptions[0].textContent;
            let thePost = posts.filter(p => p.title === selectedEl.selectedOptions[0].textContent);
            document.getElementById('post-body').innerHTML = `${thePost[0].body}`;
            document.getElementById('post-comments').innerHTML = '';

            comments.forEach(el => {
                let liEl = document.createElement('li');
                liEl.textContent = el.text;
                document.getElementById('post-comments').appendChild(liEl);
            });

        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();