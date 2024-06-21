const loadPosts = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    const data = await res.json()
    const allPosts = data.posts
    const allPostsContainer = document.getElementById("all-posts")
    console.log(allPosts);
    allPosts.forEach(item => {
        const div = document.createElement("div")
        // div.classList.add("grid grid-cols-3	")
        div.innerHTML = `
        <div class="content flex gap-10 my-6 mt-10 bg-[#F3F3F5] p-8 rounded-3xl">
                    <img class="w-20 h-20" src=${item.image} alt="">
                    <div>
                        <div class="flex gap-4 mt-4">
                            <p>#${item.category}</p>
                            <p>Author: ${item.author.name}</p>
                        </div>
                        <h2 class="text-2xl mt-4">${item.title}</h2>
                        <p class="mt-6 mb-4">${item.description}</p>
                        <hr>
                        <div class="flex items-center mt-4 gap-6 ">
                            <div class="flex items-center gap-4">
                                <img src="./images/Vector (1).png" alt="">
                                <p>${item.comment_count}</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="./images/Vector (2).png" alt="">
                                <p>${item.view_count}</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="./images/Vector (3).png" alt="">
                                <p>${item.posted_time}</p>
                            </div>
                            <button class ="ml-72"><img src="./images/Vector (1) copy.png" alt=""></button>
                            </div>
                    </div>
                </div>
        `
        allPostsContainer.appendChild(div)
    });
}


const latestPosts = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    console.log(data);
    const latestPostsContainer = document.getElementById('latest-posts')

    data.forEach(item =>{
        const div = document.createElement('div')
        div.innerHTML=`
         <div id="" class="border border-[#12132D] rounded-xl p-6">
        <img class="w-[326px] h-[190px]" src=${item.cover_image}">
                <div class="flex gap-2 items-center my-4">
                <img src="./images/logo.png" alt="">
                    <p class="my-4">${item.author.posted_date? item.author.posted_date:"No publish date"}</p>

                </div>
                <p class="my-4">${item.title}</p>
                <p class="my-4">${item.description}</p>
                <div class="flex gap-4">
                                        <img class="w-[44px] h-[44px] rounded-full" src=${item.profile_image} alt="">
                    <div class="my-4">
                        <p>${item.author.name}</p>
                        <p>${item.author.designation? item.author.designation:"Unknown"}</p>
                    </div>
                </div>
                </div>
        `
        latestPostsContainer.appendChild(div)
        
    })
}


const handleSearch = async () => {
    document.getElementById('loading-spinner').style.display = "block"
    const value = document.getElementById('search-box').value


    console.log(value);
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${value}`)
    const data = await res.json()
    const searchedData = data.posts
    console.log(searchedData);
    const allPostsContainer = document.getElementById("all-posts")

             allPostsContainer.innerHTML = ''

     document.getElementById('loading-spinner').style.display = "none"
     searchedData.length===0 && alert('No data found')
     !value && alert('Please input the category')
    searchedData.forEach(item => {
        const div = document.createElement("div")
        // div.classList.add("grid grid-cols-3	")
        div.innerHTML = `
            <div class="content flex gap-10 my-6 mt-10 bg-[#F3F3F5] p-8 rounded-3xl">
                        <img class="w-20 h-20" src=${item.image} alt="">
                        <div>
                            <div class="flex gap-4 mt-4">
                                <p>#${item.category}</p>
                                <p>Author: ${item.author.name}</p>
                            </div>
                            <h2 class="text-2xl mt-4">${item.title}</h2>
                            <p class="mt-6 mb-4">${item.description}</p>
                            <hr>
                            <div class="flex items-center mt-4 gap-6 ">
                                <div class="flex items-center gap-4">
                                    <img src="./images/Vector (1).png" alt="">
                                    <p>${item.comment_count}</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <img src="./images/Vector (2).png" alt="">
                                    <p>${item.view_count}</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <img src="./images/Vector (3).png" alt="">
                                    <p>${item.posted_time}</p>
                                </div>
                                <button class ="ml-72"><img src="./images/Vector (1) copy.png" alt=""></button>
                                </div>
                        </div>
                    </div>
            `
        allPostsContainer.appendChild(div)
    });




}


loadPosts()
latestPosts()