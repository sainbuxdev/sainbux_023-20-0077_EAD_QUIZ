
import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-neutral-800 flex flex-col">
      <div className="self-stretch flex w-full flex-col mt-5 pl-20 pr-16 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-3xl font-bold leading-6 tracking-widest uppercase bg-clip-text bg-[linear-gradient(94deg,#9B51E0_2.84%,#3081ED_99.18%)] my-auto">
            FasTech
          </div>
          <div className="self-center flex items-start justify-between gap-5 my-auto pr-px max-md:justify-center">
            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
              <div className="text-xs font-bold leading-6 tracking-widest uppercase bg-clip-text bg-[linear-gradient(94deg,#9B51E0_2.84%,#3081ED_99.18%)] whitespace-nowrap">
                Home
              </div>
              <div className="bg-purple-500 shrink-0 h-px mt-1.5" />
            </div>
            <div className="text-stone-300 text-xs font-medium leading-6 tracking-widest uppercase self-start">
              My profile
            </div>
            <div className="text-stone-300 text-xs font-medium leading-6 tracking-widest uppercase self-start">
              activity
            </div>
            <div className="text-stone-300 text-xs font-medium leading-6 tracking-widest uppercase whitespace-nowrap self-start">
              how it works
            </div>
          </div>
          <div className="flex items-stretch justify-between gap-5">
            <div className="text-stone-300 text-xs font-medium leading-6 tracking-widest uppercase whitespace-nowrap border grow items-center px-5 py-5 rounded-xl border-solid border-zinc-300">
              create
            </div>
            <div className="text-stone-300 text-xs font-medium leading-6 tracking-widest uppercase self-center whitespace-nowrap my-auto">
              sign in
            </div>
          </div>
        </div>
        <div className="self-stretch mt-40 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-6 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-7xl font-semibold leading-[82px] tracking-tighter max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  Discover, collect, and charity in extraordinary NFT
                  marketplace
                </div>
                <div className="text-neutral-200 text-2xl leading-9 tracking-wide mt-4 max-md:max-w-full">
                  In aenean posuere lorem risus nec. Tempor tincidunt aenean
                  purus purus vestibulum nibh mi venenatis
                </div>
                <div className="flex items-stretch justify-between gap-5 mt-11 pr-44 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
                  <div className="text-white text-2xl font-semibold leading-9 tracking-tighter whitespace-nowrap justify-center items-center grow px-5 py-3 rounded-2xl">
                    Explore
                  </div>
                  <div className="text-zinc-300 text-2xl font-semibold leading-9 tracking-tighter whitespace-nowrap justify-center items-center border grow px-5 py-3 rounded-2xl border-solid border-zinc-300">
                    Create
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <div className="backdrop-blur-[555px] flex flex-col items-stretch pl-7 pr-7 py-6 rounded-[35.025px] border-[0.876px] border-solid border-fuchsia-500 max-md:max-w-full max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db9dfeec-e8a0-44bb-9cb4-1ccf12109b5f?apiKey=c746632356d440988eaf2951a460c923&"
                    className="aspect-[1.02] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  />
                  <div className="flex w-full items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                    <div className="flex items-stretch justify-between gap-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0921f0f4-c03b-465c-b348-b74bfdf63a21?apiKey=c746632356d440988eaf2951a460c923&"
                        className="aspect-[0.95] object-contain object-center w-[53px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                        <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">
                          Laura
                        </div>
                        <div className="text-zinc-300 text-base font-medium leading-6 whitespace-nowrap mt-2">
                          0.21 Weth
                        </div>
                      </div>
                    </div>
                    <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                      <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">
                        WE ARE HERE
                      </div>
                      <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap mt-2 self-end">
                        25
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3492ef2b-cfb2-49fa-95d2-315db85009e0?apiKey=c746632356d440988eaf2951a460c923&"
                  className="aspect-[1.52] object-contain object-center w-8 overflow-hidden max-w-full mt-10 self-end"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[1241px] justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-5xl font-medium leading-[72px] tracking-tighter grow shrink basis-auto max-md:text-4xl max-md:leading-[67px]">
            Hot auctions
          </div>
          <div className="text-zinc-300 text-2xl font-semibold leading-9 tracking-tighter whitespace-nowrap mt-4 self-end">
            View all
          </div>
        </div>
        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/babba222-cc83-4821-bdd3-836ea436f402?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cbf0099-f136-400b-88a9-e70f167fd0dc?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f461417-2818-49af-9c5b-c0d01d68663a?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a48bbc08-4880-47f1-89e2-8324d83e46d3?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-start justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="self-stretch flex grow basis-[0%] flex-col items-stretch py-px max-md:max-w-full">
            <div className="z-[1] flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-white text-base font-semibold leading-6">
                Lorem Ipsum
              </div>
              <div className="flex items-stretch justify-between gap-5 self-start">
                <div className="text-white text-base font-medium leading-6">
                  1.20 Weth
                </div>
                <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">
                  Dolor sit amet
                </div>
              </div>
              <div className="flex basis-[0%] flex-col items-stretch">
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
                  0.21 Weth
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/81323801-b603-48b0-977f-eab93291d81b?apiKey=c746632356d440988eaf2951a460c923&"
                  className="aspect-[1.14] object-contain object-center w-6 overflow-hidden max-w-full mr-3.5 self-end max-md:mr-2.5"
                />
              </div>
            </div>
            <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db79d505-216d-46a2-a582-9b7c98cb2332?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d056d4-60d7-47eb-abbb-05094a4f890b?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
              />
            </div>
          </div>
          <div className="flex basis-[0%] flex-col items-stretch self-start">
            <div className="z-[1] flex justify-between gap-5">
              <div className="text-white text-base font-semibold leading-6">
                Dignissim curabitu..
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
                  0.01 Weth
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3eba7ce-0602-4ed3-a51a-18e854990fef?apiKey=c746632356d440988eaf2951a460c923&"
                  className="aspect-[1.19] object-contain object-center w-[25px] overflow-hidden max-w-full ml-3 self-start max-md:ml-2.5"
                />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49afda3b-4021-4e66-a050-78761b3ee992?apiKey=c746632356d440988eaf2951a460c923&"
              className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
            />
          </div>
          <div className="text-white text-base font-semibold leading-6">
            Amet pellentesq..
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3a4a239-b15c-4c2b-b9b1-9d671aa2fedf?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[1.2] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full mt-5 self-start"
          />
          <div className="text-white text-base font-medium leading-6 whitespace-nowrap self-start">
            0.55 Weth
          </div>
        </div>
        <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-white text-base leading-6 my-auto">
            <span className="text-stone-300">Ends in</span>
            <span className="text-white"> 01.34.45</span>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
              Bid
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 01.34.45</span>
            </div>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
              Bid
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 56.44.45</span>
            </div>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
              Bid
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 01.34.45</span>
            </div>
          </div>
          <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border self-stretch aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
            Bid
          </div>
        </div>
        <div className="self-stretch flex w-full justify-between gap-5 mt-40 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <div className="text-white text-5xl font-medium leading-[72px] tracking-tighter max-md:text-4xl max-md:leading-[67px]">
            Discover
          </div>
          <div className="self-center flex items-stretch justify-between gap-5 my-auto">
            <div className="text-white text-2xl font-medium leading-9 tracking-tighter">
              Category
            </div>
            <div className="text-white text-2xl font-medium leading-9 tracking-tighter whitespace-nowrap">
              Cheapest
            </div>
          </div>
          <div className="self-stretch flex items-center justify-between gap-5">
            <div className="text-white text-2xl font-medium leading-9 tracking-tighter my-auto">
              Newest
            </div>
            <div className="text-white text-2xl font-medium leading-9 tracking-tighter whitespace-nowrap bg-[linear-gradient(94deg,#9B51E0_2.84%,#3081ED_99.18%)] self-stretch grow px-5 py-4 rounded-xl max-md:pr-2.5">
              Filter
            </div>
          </div>
        </div>
        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0802d3d5-adfe-488e-a464-45d2ab47f405?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9ea7f44-aab6-4df8-a3d7-f3c3e9f985da?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97262257-9bb4-48c0-b009-d110ed6456ba?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d37e40a5-ae5a-49d8-b8d5-783ee2c3ccd7?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-white text-base font-semibold leading-6">
            Lorem Ipsum
          </div>
          <div className="flex items-stretch justify-between gap-5 self-start">
            <div className="text-white text-base font-medium leading-6">
              1.20 Weth
            </div>
            <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">
              Dolor sit amet
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="text-white text-base font-medium leading-6">
              0.21 Weth
            </div>
            <div className="text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap">
              Dignissim curabitu..
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="text-white text-base font-medium leading-6">
              0.01 Weth
            </div>
            <div className="text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap">
              Amet pellentesq..
            </div>
          </div>
          <div className="text-white text-base font-medium leading-6 whitespace-nowrap self-start">
            0.55 Weth
          </div>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71abc5df-0f6d-4132-8278-1d5c2cea1a05?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dce11e9b-5fdc-44a9-96f7-fb14616dca9a?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43dd69ca-265f-4bb1-9845-fb453adc9c3e?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a9eac61-325f-49bd-b9af-38b0c605c2ce?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
        </div>
        <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-white text-base leading-6 my-auto">
            <span className="text-stone-300">Ends in</span>
            <span className="text-white"> 01.34.45</span>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] px-5 py-2 rounded-lg border-solid border-neutral-200 max-md:pl-1">
              Buy
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 01.34.45</span>
            </div>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] px-5 py-2 rounded-lg border-solid border-neutral-200 max-md:pl-1">
              Buy
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 56.44.45</span>
            </div>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] px-5 py-2 rounded-lg border-solid border-neutral-200 max-md:pl-1">
              Buy
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 01.34.45</span>
            </div>
          </div>
          <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border self-stretch aspect-[2.5172413793103448] px-5 py-2 rounded-lg border-solid border-neutral-200 max-md:pl-1">
            Buy
          </div>
        </div>
        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc0af7cf-7f7f-4a61-adee-f9fd7752feda?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/651c6deb-2e43-45e0-a88f-35d211fa2eb8?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5d3aa4a-a315-4fec-9f9c-b95a54f4d328?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4395ad8a-9d02-4b29-a685-d9adab7849d4?apiKey=c746632356d440988eaf2951a460c923&"
                className="aspect-[0.95] object-contain object-center w-full overflow-hidden max-md:mt-9"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-white text-base font-semibold leading-6">
            Lorem Ipsum
          </div>
          <div className="flex items-stretch justify-between gap-5 self-start">
            <div className="text-white text-base font-medium leading-6">
              1.20 Weth
            </div>
            <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">
              Dolor sit amet
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="text-white text-base font-medium leading-6">
              0.21 Weth
            </div>
            <div className="text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap">
              Dignissim curabitu..
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="text-white text-base font-medium leading-6">
              0.01 Weth
            </div>
            <div className="text-white text-base font-semibold leading-6 self-stretch whitespace-nowrap">
              Amet pellentesq..
            </div>
          </div>
          <div className="text-white text-base font-medium leading-6 whitespace-nowrap self-start">
            0.55 Weth
          </div>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cea2620-2e2b-488c-91c0-932c14b14029?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/edf13ec8-9757-4c05-b7d1-a565bbac4900?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a659e9a6-e694-49ee-b957-29211e143072?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34cbc6c3-c54a-4a8a-b1b3-c33b8eb79ea4?apiKey=c746632356d440988eaf2951a460c923&"
            className="aspect-[298] object-contain object-center w-[298px] stroke-[1px] stroke-stone-300 overflow-hidden"
          />
        </div>
        <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-white text-base leading-6 my-auto">
            <span className="text-stone-300">Ends in</span>
            <span className="text-white"> 01.34.45</span>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
              Bid
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 01.34.45</span>
            </div>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
              Bid
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 56.44.45</span>
            </div>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5">
            <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
              Bid
            </div>
            <div className="text-white text-base leading-6 self-center whitespace-nowrap my-auto">
              <span className="text-stone-300">Ends in</span>
              <span className="text-white"> 01.34.45</span>
            </div>
          </div>
          <div className="text-neutral-200 text-base font-medium leading-6 whitespace-nowrap border self-stretch aspect-[2.5172413793103448] items-center px-5 py-2 rounded-lg border-solid border-neutral-200">
            Bid
          </div>
        </div>
        <div className="text-stone-300 text-xs font-medium leading-6 tracking-widest uppercase whitespace-nowrap border self-center w-[161px] max-w-full items-center mt-28 px-5 py-5 rounded-xl border-solid border-zinc-300 max-md:mt-10">
          Load more
        </div>
      </div>
      <div className="self-center w-full max-w-[1297px] mt-44 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <div className="text-white text-4xl font-medium leading-[60px] max-md:mt-10">
              Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
              quis magna faucibus lacus.
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-4xl leading-[60px] whitespace-nowrap">
                      Marketplace
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-14 max-md:mt-10">
                      Home
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-12 max-md:mt-10">
                      Activity
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-11 max-md:mt-10">
                      Discover
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-12 max-md:mt-10">
                      Learn more
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-4xl leading-[60px] whitespace-nowrap">
                      Company
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-14 max-md:mt-10">
                      About Us
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-12 max-md:mt-10">
                      Services
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-12 max-md:mt-10">
                      Portfolio
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-white text-4xl leading-[60px] whitespace-nowrap">
                      Contact
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-16 max-md:mt-10">
                      Facebook
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-12 max-md:mt-10">
                      Instagram
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-11 max-md:mt-10">
                      Twitter
                    </div>
                    <div className="text-zinc-300 text-2xl leading-9 tracking-wider whitespace-nowrap mt-12 max-md:mt-10">
                      Email
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 self-center w-[1297px] shrink-0 h-px mt-14 max-md:max-w-full max-md:mt-10" />
      <div className="self-center flex w-full max-w-[1297px] justify-between gap-5 mt-9 mb-20 px-5 max-md:max-w-full max-md:flex-wrap max-md:mb-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c616c70-93d9-4e0b-82dd-75fd17bd76ef?apiKey=c746632356d440988eaf2951a460c923&"
          className="aspect-[4.56] object-contain object-center w-[146px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-zinc-500 text-2xl leading-9 whitespace-nowrap mt-3">
          Copyright 2021 Gaslur
        </div>
      </div>
    </div>
  );
}


