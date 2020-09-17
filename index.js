const image = document.querySelector('img');
        const btn = document.querySelector('button');

        const form = document.querySelector('form');
        form.addEventListener('submit', searchImg);

        function searchImg(e) {
            e.preventDefault();
            const inputValue = form.querySelector('input').value;
            fetch('https://api.giphy.com/v1/gifs/translate?api_key=wfLz3EnY97PvaqWGv8kDNmpk1r8hxWQz&s=' + inputValue)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    image.src = data.data.images.original.url
                    // console.log(image.src);
                })
                .catch(function (error) {
                    image.src = 'error.gif';
                    // console.log(error);
                })

            form.reset();
        }

        btn.addEventListener('click', loadImg);

        function loadImg(e) {
            e.preventDefault();
            fetch('https://api.giphy.com/v1/gifs/translate?api_key=wfLz3EnY97PvaqWGv8kDNmpk1r8hxWQz&s=cats', {
                    mode: 'cors'
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setTimeout(() => {
                        image.src = data.data.images.original.url
                    }, 500);
                })
<<<<<<< HEAD:index.js
        }
=======
        }
    </script>
</body>

</html>
>>>>>>> d12f47357003b1482eecb9c5f758ce4a216163ba:index.html
