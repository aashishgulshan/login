import {React} from 'react';
const Demo = () =>{
    return(
        <>
            <div class="flex justify-center bg-gray-300 ">
                <nav class="self-center w-full max-w-7xl  ">
                    <div class="flex flex-col lg:flex-row justify-around items-center border-b-2">
                        <h1 class="uppercase pl-5 py-4 text-xl font-sans font-bold">fashionhub</h1>
                        <ul class="hidden lg:flex items-center text-[18px] font-semibold pl-32">
                            <li class="hover:underline  underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                                <a href="#">Home</a>
                            </li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">Contact</a></li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">Services</a></li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">About</a></li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">Pricing</a></li>
                        </ul>
                        <div class=" text-center text-base pr-5  inline-flex"> <a href="#"
                                class="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i
                                    class="fa fa-twitter"></i></a> <a href="#"
                                class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                    class="fa fa-instagram"></i></a> <a href="#"
                                class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                    class="fa fa-facebook"></i></a> <a href="#"
                                class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                    class="fa fa-google"></i></a> <a href="#"
                                class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                    class="fa fa-linkedin"></i></a> </div>
                    </div>
                </nav>
            </div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="rounded-lg w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>
        <div class="md:p-2 p-1 w-1/2 ">
          <img alt="gallery" class="rounded-lg w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div>
        <div class="md:p-2 p-1 w-1/2 rounded-lg">
          <img class="w-full object-cover h-full object-center block"/>
        </div>
      </div>
    </div>
  </div>
</section>
            {/* <script src="https://cdn.tailwindcss.com"></script> */}
            {/* <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> */}
        </>
    )

}
export default Demo;