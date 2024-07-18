"use client";

import { Squircle } from "@squircle-js/react";
import { Squircle as ReactIosCorner } from "react-ios-corners";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>How to Squircle</header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start *:flex *:gap-3 *:justify-center *:w-full">
        <div className="flex gap-3">
          <Squircle
            cornerRadius={64}
            cornerSmoothing={1}
            width={256}
            height={256}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          </Squircle>
          <div className="w-64 h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[64px]"></div>
        </div>
        <div className="flex gap-3">
          <Squircle
            asChild
            cornerRadius={12}
            cornerSmoothing={1}
            className="bg-white text-black px-2 py-1"
          >
            <span className="text-2xl">Inline Squircle</span>
          </Squircle>
          <span className="bg-white text-black px-2 py-1 rounded-xl text-2xl">
            Inline Rounded
          </span>
        </div>
        <hr />
        <div className="relative">
          <Squircle
            cornerRadius={64}
            cornerSmoothing={1}
            width={256}
            height={256}
          >
            <div className="w-full h-full bg-gradient-to-br bg-red-500/40 absolute" />
          </Squircle>
          <div className="w-64 h-64 bg-gradient-to-br bg-blue-500/40 absolute rounded-[64px]"></div>
        </div>
        <div className="relative h-28">
          <button className="absolute">
            <Squircle
              cornerRadius={12}
              cornerSmoothing={1}
              className="bg-red-500/40 text-black px-4 py-3 text-2xl"
            >
              Button
            </Squircle>
          </button>
          <button className="bg-blue-500/40 text-black px-4 py-3 rounded-xl text-2xl absolute">
            Button
          </button>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <div className="">
            <ReactIosCorner>
              <button
                className="bg-white w-full p-10 py-2 text-black cursor-pointer"
                onClick={() => {
                  alert("ReactIosCorner Clicked");
                }}
              >
                React IOS Corner
              </button>
            </ReactIosCorner>
          </div>
          <button
            className="bg-white p-10 py-2 text-black rounded-xl cursor-pointer"
            onClick={() => {
              alert("Rounded Clicked");
            }}
          >
            Rounded Button
          </button>
          <Squircle
            asChild
            cornerRadius={12}
            cornerSmoothing={1}
            className="bg-white text-black p-10 py-2"
          >
            <button
              className="bg-white p-10 py-2 text-black cursor-pointer"
              onClick={() => {
                alert("Rounded Clicked");
              }}
            >
              Inline Squircle
            </button>
          </Squircle>
        </div>
      </main>
      <footer className="mt-80 pb-20">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <h3 className="font-bold text-lg mb-2">Squircle.js</h3>
        <p className="text-sm mb-3">
          RSC ... ✅ <br />
          小さい要素だと分かりづらい
          <br />
          <strong>使用要素 ... カード</strong>
        </p>
        <h3 className="font-bold text-lg mb-2">React IOS Corner</h3>
        <p className="text-sm mb-3">
          RSC ... ❌ <br />
          小さい要素でも分かりやすい
          <br />
          <strong>使用要素 ... ボタン</strong>
        </p>
        <p>こだわるなら使い分ける。Squircle.jsに統一しても良いと思う。</p>
      </footer>
    </div>
  );
}
