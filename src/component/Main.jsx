import React from 'react'

function Main() {
  return (
    <div className='cardlist px-4 py-4 flex justify-between items-center sm:flex-col lg:flex-row'>
      <>
      <div class="card sm:mb-20">
  <div class="imgBox">
    <img src="https://assetsio.gnwcdn.com/top_22_cristiano_ronaldo.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" width={'800px'} alt="mouse CR7" class="mouse" />
  </div>

  <div class="contentBox">
    <h3>CR7</h3>
    <a href="#" class="buy">Check Now</a>
  </div>

</div>
      </>
      <>
      <div class="card sm:mb-20">

  <div class="imgBox">
    <img src="https://i.redd.it/3aa9bf72tn2b1.png" width={'800px'} alt="mouse CR7" class="mouse" />
  </div>

  <div class="contentBox">
    <h3>Maradona</h3>
    <a href="#" class="buy">Check Now</a>
  </div>

</div>
      </>
      <>
      <div class="card sm:mb-20">

  <div class="imgBox">
    <img src="https://library.sportingnews.com/2021-11/lionel-messi-fut-base-93_1o3m39jkuh20j1itc0w2pe9x0d.png" width={'800px'} alt="mouse CR7" class="mouse" />
  </div>

  <div class="contentBox">
    <h3>Messi</h3>
    <a href="#" class="buy">Check Now</a>
  </div>

</div>
      </>
    </div>
  )
}

export default Main
