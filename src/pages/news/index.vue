<template>
  <div class="container news">
    <h4 class="post_title">POSTS</h4>
    <div class="posts">
      <div class="left_side">
        <div v-for="post of posts" v-bind:key="post.id">
          <div class="card">
            <p href="#" class="card_date">
              <a href="#" v-text="post.date" />
            </p>
            <a href="#" class="card_title" v-text="post.title" />
            <div class="card_logo">
              <a href="#">
                <img :src="post.img" width="100%" />
              </a>
            </div>
            <p>5 Questions with NERD Producer & AOP Board Member Ira Giorgetti What was it like moving to London and why did you do it? Ira: I first moved to the big smoke in 2016, back then I was fresh to the local scene and really struggled to find a community where creatives of all backgrounds …</p>
            <a href="#" class="card_continue">Continue Reading</a>
          </div>
        </div>
      </div>
      <div class="right_side">
        <div class="card">
          <Search />
          <div class="lists">
            <p class="sub_title">Recent Posts</p>
            <div class="list" v-for="recent of recent_posts" v-bind:key="'rp' + recent.title">
              <a href="#" v-text="recent.title" />
            </div>
          </div>
          <div class="lists">
            <p class="sub_title">Categories</p>
            <div class="list" v-for="category of categories" v-bind:key="'ct' + category.id">
              <a href="#" v-text="category.title" />
            </div>
          </div>
          <p class="sub_title">Sign up to out newsletter</p>
          <div class="form-fields">
            <span>
              <input
                class="balloon"
                type="text"
                id="first_name"
                placeholder=". . ."
                required
              />
              <label for="first_name">First Name</label>
            </span>
            <span>
              <input
                class="balloon"
                type="text"
                id="last_name"
                placeholder=". . ."
                required
              />
              <label for="last_name">Last Name</label>
            </span>
            <span>
              <input
                class="balloon"
                type="email"
                id="the_email"
                placeholder=". . ."
                required
              />
              <label for="the_email">Email address</label>
            </span>
            <span>
              <input
                class="balloon"
                type="text"
                id="company"
                placeholder=". . ."
                required
              />
              <label for="company">Company</label>
            </span>
          </div>
          <button class="signup_btn">Sign up</button>
          <div class="lists">
            <p class="sub_title">Archives</p>
            <div class="list" v-for="archive of archives" v-bind:key="archive">
              <a href="#" v-text="archive" />
            </div>
          </div>
          <p class="sub_title">Connect with us!</p>
          <div class="connects">
            <a href="#" v-for="connect of connects" v-bind:key="connect.name" >
              <img :src="connect.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts" >
  import { useAsyncData } from '#app'


  export default {
    mounted: {
      const { data, error, pending } = await useAsyncData('news', () => $fetch('https://nerd.productions/api/v2/news') )
    },

    data: () => ({
      posts: [
        {
          id: 0,
          date: 'JAN 25, 2022',
          title: 'NERD Producer & Photographer Ira Giorgetti on the Association of Photography, finding a creative tribe and making work that matters',
          img: 'https://blog.nerd.productions/wp-content/uploads/2022/01/e002-1024x683.jpg',
          content: '5 Questions with NERD Producer & AOP Board Member Ira Giorgetti What was it like moving to London and why did you do it? Ira: I first moved to the big smoke in 2016, back then I was fresh to the local scene and really struggled to find a community where creatives of all backgrounds …',
        },
        {
          id: 1,
          date: 'DEC 09, 2021',
          title: 'Diablo II: Resurrected - A real labor of love and respect by Billelis',
          img: 'https://blog.nerd.productions/wp-content/uploads/2021/12/image3-819x1024.jpeg',
          content: 'Diablo II: Resurrected is a remastered port of the classic dungeon-crawler and we got to craft some truly spectacular labors of love for Blizzard’s iconic franchise. ​While working on this fiery set of artworks, Billelis focused on the importance of the franchise’s heritage, its lengthy history, and endless fan love while also managing his own …',
        },
        {
          id: 2,
          date: 'JAN 25, 2022',
          title: 'NERD Producer & Photographer Ira Giorgetti on the Association of Photography, finding a creative tribe and making work that matters',
          img: 'https://blog.nerd.productions/wp-content/uploads/2022/01/e002-1024x683.jpg',
          content: '5 Questions with NERD Producer & AOP Board Member Ira Giorgetti What was it like moving to London and why did you do it? Ira: I first moved to the big smoke in 2016, back then I was fresh to the local scene and really struggled to find a community where creatives of all backgrounds …',
        },
      ],
      recent_posts: [
        { id: 0, title: 'NERD Producer & Photographer Ira Giorgetti on the Association of Photography, finding a creative tribe and making work that matters' },
        { id: 1, title: 'Diablo II: Resurrected - A real labor of love and respect by Billelis' },
        { id: 2, title: 'Bossing It: Staying Calm During the Tough Times with Milana Karaica' },
        { id: 3, title: "NERD's Director Rafa Cortés on the power of printing and how to find the best ideas." },
        { id: 4, title: "'Must know' facts about NERD Productions animation director Sharon Liu" },
      ],
      categories: [
        { id: 0, title: 'Artist Tips and Tricks' },
        { id: 1, title: 'Behind the Scenes' },
        { id: 2, title: 'Creative' },
        { id: 3, title: 'Get To Know:' },
        { id: 4, title: 'Getting Down and NERDy!' },
        { id: 5, title: 'Introducing...' },
        { id: 6, title: 'NERD Says:' },
        { id: 7, title: 'NEWS' },
        { id: 8, title: 'SIGNED!' },
        { id: 9, title: 'Uncategorized' },
      ],
      archives: ['January 2022', 'December 2021', 'November 2021', 'August 2021', 'July 2021', 'June 2021', 'April 2021', 'March 2021', 'November 2020', 'October 2020'],
      connects: [
        { name: 'facebook', icon: 'https://blog.nerd.productions/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_facebook.png' },
        { name: 'twitter', icon: 'https://blog.nerd.productions/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_twitter.png' },
        { name: 'linkedin', icon: 'https://blog.nerd.productions/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_linkedin.png' },
        { name: 'instagram', icon: 'https://blog.nerd.productions/wp-content/plugins/ultimate-social-media-icons/images/icons_theme/default/default_instagram.png' },
      ]
    })
  }
</script>