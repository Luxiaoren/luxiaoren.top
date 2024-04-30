'use client'
import Image from "next/image";
import './app.css'
import {useEffect, useState} from "react";
// @ts-ignore
import Physics from 'physicsjs';
const loading = (postion: string) => {

    return (
        <div className={`loader ${postion === 'right' ? 'right' : ''}`}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    )
}
export default function Index() {

    const [splitUp, setSplitUp] = useState(false)
    setTimeout(() => {
        setSplitUp(true)
    }, 2000)
    return (
        <main className="min-h-screen site-main bg-white">
            <header className="w-screen text-black flex justify-start h-20 items-center p-5">
                <p className="">
                    <span className="text-2xl font-jersey">Luxiaoren</span>
                    <span>js</span>
                </p>
                <p className="ml-20 cursor-pointer w-32 header-item">
                    <a href="/about">简历</a>
                </p>
                <p className="ml-20 cursor-pointer w-32">文档</p>
            </header>
            <div className="w-screen  bg-white">
                <div className={`split-box z-[1] bg-white absolute min-h-screen w-1/2 left-0 top-0 ${splitUp ? 'split-left' : ''}`}>
                    {loading('left')}
                </div>
                <div className={`split-box z-[1] bg-white absolute min-h-screen w-1/2 right-0 top-0 ${splitUp ? 'split-right' : ''}`}>{loading('right')}</div>

                <div className="text-4xl title cursor-pointer">
                    <p className="text-black-500" >这是一个用于生产环境的</p>
                    <p className="" >Web开发者</p>
                </div>
                <div className="luxiaoren-content">
                    <p className="">Luxiaoren 为您提供生产环境所需的所有web开发: 包括传统pc网站，h5页面，企微应用，小程序开发（Taro,
                        uniapp,原生）, nestjs开发（node）</p>
                </div>
                <footer id="footer" className="w-screen fixed bottom-0 color-black text-gray-500 bg-white">
                    <div className="flex justify-center text-black-500">
                        <span data-v-733d78f1=""> Copyright&nbsp;© </span>
                        <span className="site-start">2024 - </span> 2025
                        {/*<a href="//imsyy.top">康勇&amp;</a>*/}
                        <span className=""> &amp;&nbsp;Made&nbsp;by &nbsp;</span>
                        <a href="https://github.com/imsyy/home" target="_blank">luxiaoren</a>
                        <a href="https://beian.miit.gov.cn" target="_blank"> &nbsp;&amp; 苏ICP备2024090231号-2</a>
                    </div>
                </footer>
            </div>

        </main>
    );
}
