<template>
  <div class="container about">
    <div class="card">
      <p class="title">About Our Craft & Approach</p>
      <div class="content" v-html="craft_content" />
      <div class="img_container">
        <img src="/images/about/curiosity.png" height="50" alt="" class="mx-3 lg">
        <img src="/images/about/akqa.png" height="40" alt="" class="mx-3 lg">
        <img src="/images/about/publicis_groupe.png" height="50" alt="" class="mx-3 lg">
        <img src="/images/about/jwt.png" width="55" alt="" class="mx-3 lg">
        <img src="/images/about/mccann.png" width="90" alt="" class="mx-3 lg">
        <img src="/images/about/ogilvy.png" width="80" alt="" class="mx-3 lg">
        <img src="/images/about/havas.png" width="80" alt="" class="mx-3 lg">
        <img src="/images/about/xbox.png" height="45" alt="" class="lg mx-3">
        <img src="/images/about/red_antler.png" height="40" alt="" class="lg mx-3">
        <img src="/images/about/adam&eve.png" width="150" alt="" class="mx-3 lg">
        <img src="/images/about/disney.png" width="95" alt="" class="mx-3 lg">
        <img src="/images/about/adidas.png" height="50" alt="" class="mx-3 lg">
        <img src="/images/about/google.png" width="40" alt="" class="mx-3 lg">
        <img src="/images/about/honda.png" width="70" alt="" class="mx-3 lg">
        <img src="/images/about/sega.png" height="30" alt="" class="lg mx-3">
        <img src="/images/about/unicef.png" width="90" alt="" class="lg mx-4">
        <img src="/images/about/nike.png" width="80" alt="" class="mx-4 lg">
        <img src="/images/about/samsung.png" width="80" alt="" class="mx-4 lg">
        <img src="/images/about/sephora.png" width="90" alt="" class="mx-4 lg">
        <img src="/images/about/ted.png" width="60" alt="" class="mx-4 lg">
        <img src="/images/about/apple.png" width="40" alt="" class="mx-4 lg">
      </div>
    </div>
    <div class="card">
      <p class="title">Our mission: Diversity & Inclusion</p>
      <div class="content" v-html="mission_content" />
      <div class="img_container">
        <img src="/images/about/badass_gal.png" width="80" alt="" class="mx-2 lg">
        <img src="/images/about/bbc.png" width="70" alt="" class="mx-2 lg">
        <img src="/images/about/creative_pioneers.png" width="60" alt="" class="mx-2 lg">
        <img src="/images/about/dad.png" width="80" alt="" class="mx-2 lg">
        <img src="/images/about/free_the_work.png" width="50" alt="" class="mx-2 lg">
        <img src="/images/about/women_owned.png" width="70" alt="" class="mx-2 lg">
        <img src="/images/about/pitch.png" width="40" alt="" class="mx-2 lg">
        <img src="/images/about/freshmeet.png" width="130" alt="" class="lg mx-2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    craft_content: '<div><p>We are a <strong>diversity and inclusion led creative production</strong> company representing a wide range of <strong>hand-picked directors, illustrators and photographers</strong>. We craft animation, illustration, live-action, mixed-media, and photography for television, digital, social, editorial and everything in between.</p><p>Our fiercely talented artists and highly experienced producers work hand-in-hand with our clients&nbsp;to<b> </b>bring to life instantly recognisable&nbsp;concepts&nbsp;that&nbsp;<b>exceed creative expectations for&nbsp;each one of our carefully crafted bespoke visuals,&nbsp;</b>that we can altogether be proud of.&nbsp;</p><p>We pride ourselves in our <strong>collaborative and innovative approach</strong> to production, from early development stages to delivery.&nbsp;</p><p>We’re <strong>immensely </strong>proud of our talent for <strong>regularly winning awards</strong> for their work including&nbsp;D&amp;AD, British Animation Awards, The British Arrows, Promax, Creative Circle, London International Awards, Clios, Cannes Lions and many more.&nbsp;</p><p>&nbsp;</p></div>',
    mission_content: '<div><p>We advocate<strong> diversity and inclusion</strong> by championing an innovative and forward-thinking company culture that focuses on constantly seeking, <strong>nurturing and empowering young talent, female talent and talent from under-represented backgrounds</strong>. We are helping to change and reshape our industry to be a more diverse and inclusive one, today, tomorrow and for future generations to come.</p><p>We proudly produce powerful visuals that stand out, engage and communicate with our global audiences in relevant, relatable and authentic ways thanks to our key ethos at NERD: we always seek to create work that empowers viewers and&nbsp;inspires equality and tolerance.</p><p><strong>We are shifting our industry towards a more diverse, inclusive and equal future for all.</strong></p><p>We are members and supporters of organisations such as Free the Bid, New Blood, Women OWNED and more.</p><p>Our seasoned as well as up &amp; coming talent are constantly <strong>working together to fight the current diversity statistics</strong>. Setting out with the intention and ambition of nurturing and empowering talent from ALL backgrounds, NERD was born.</p><p><em>“I never had female role models in animation and advertising, I also didn’t notice more than a handful of ethnic individuals in senior positions or those that came from n‘on-traditional’ backgrounds. Bearing in mind that I’m all of those things, my inspiration stemmed from many male-dominated meetings and my fondness for craft and filmmaking. Together with our male counter parts - there is no reason why we can’t <strong>make the industry a more equal one for all talent!</strong>" Milana Karaica, Founder&nbsp;</em></p><p>&nbsp;</p></div>'
  })
}
</script>
