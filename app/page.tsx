'use client'
import Image from "next/image";
import './app.css'
import {useState} from "react";

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
    }, 1000)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="bg-white absolute w-screen min-h-screen left-0 top-0">
                <div className={`split-box z-[1] bg-white absolute min-h-screen w-1/2 left-0 top-0 ${splitUp ? 'split-left' : ''}`}>
                    {loading('left')}
                </div>
                <div className={`split-box z-[1] bg-white absolute min-h-screen w-1/2 right-0 top-0 ${splitUp ? 'split-right' : ''}`}>{loading('right')}</div>

                <h1 className="text-4xl title">
                    <p className="text-black-500">这是一个用于生产环境的开发者</p>
                    {/*<p className="text-black-500 name">--康勇</p>*/}
                </h1>

                <footer id="footer" className="w-screen absolute bottom-0 color-black text-gray-500">
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
