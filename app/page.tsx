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
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="bg-white absolute w-screen min-h-screen left-0 top-0">
                <div className={`split-box z-[1] bg-white absolute min-h-screen w-1/2 left-0 top-0 ${splitUp ? 'split-left' : ''}`}>
                    {loading('left')}
                </div>
                <div className={`split-box z-[1] bg-white absolute min-h-screen w-1/2 right-0 top-0 ${splitUp ? 'split-right' : ''}`}>{loading('right')}</div>

                <div className="text-4xl title cursor-pointer flex justify-center font-jersey flex-wrap">
                    <p className="text-black-500 this" id="this">THIS&nbsp;</p>
                    <p className="text-black-500 is">IS&nbsp;</p>
                    <p className="text-black-500 a">A&nbsp;</p>
                    <p className="text-black-500 develope">DEVELOPER&nbsp;</p>
                    <p className="text-black-500 for">FOR&nbsp;</p>
                    <p className="text-black-500 production">PRODUCTION&nbsp;</p>
                    <p className="text-black-500 environment">ENVIRONMENT</p>
                    {/*<p className="text-black-500">生</p>*/}
                    {/*<p className="text-black-500">产</p>*/}
                    {/*<p className="text-black-500">环</p>*/}
                    {/*<p className="text-black-500">境</p>*/}
                    {/*<p className="text-black-500">的</p>*/}
                    {/*<p className="text-black-500">开</p>*/}
                    {/*<p className="text-black-500">发</p>*/}
                    {/*<p className="text-black-500">者</p>*/}
                    {/*<p className="text-black-500 name">--康勇</p>*/}
                </div>

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
