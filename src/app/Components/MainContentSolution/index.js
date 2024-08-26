'use client'; 

import React from "react"; 
import Link from 'next/link'; 
import { useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";

export default function MainContentSolution(){
    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             const id = entry.target.getAttribute('id');
    //             if (entry.isIntersecting) {
    //                 document.querySelector(`div a[href="#${id}"]`).classList.add('font-bold');
    //             } else {
    //                 document.querySelector(`div a[href="#${id}"]`).classList.remove('font-bold');
    //             }
    //         });
    //     }, { threshold: 0.5 }); // You can adjust the threshold as needed

    //     // Track all sections that have an `id` applied
    //     document.querySelectorAll('section[id]').forEach((section) => {
    //         observer.observe(section);
    //     });

    //     return () => {
    //         // Clean up the observer on component unmount, otherwise there will be error when navigate
    //         //other pages
    //         document.querySelectorAll('section[id]').forEach((section) => {
    //             observer.unobserve(section);
    //         });
    //     };
    // }, []);

    return(
        <main className = "mt-6 flex gap-3 justify-between scroll-smooth">
            <div id="Mucluc" className = " w-40 ml-4 sticky top-14 self-start">
                <h2 className="font-bold">Mục lục</h2> 
                <div data-to-scrollspy-id="gp1" className="block mt-2 text-xs hover:text-red-500">
                    1. Về Biogas HDPE
                </div>
                <div data-to-scrollspy-id="gp2" className="block mt-2 text-xs hover:text-red-500">
                    <p>2. Dịch vụ thiết kế và thi công  Biogas HDPE của DK</p>
                </div>
                <div data-to-scrollspy-id="gp3" className="block mt-2 text-xs hover:text-red-500">
                    3. Các hạng mục thi công Biogas HDPE của DK
                </div>
                <div data-to-scrollspy-id="gp4" className="block mt-2 text-xs hover:text-red-500">
                    4. Hình ảnh các dự án Biogas HDPE do DK thi công
                </div>
            </div> 
            <div className="w-1/2">
                <ScrollSpy>
                <section id="gp1" className="scroll-mt-12">
                    <div className = "w-full ">
                        <h1 className="font-bold text-xl">1. Về Biogas HDPE</h1>
                        <p>
                        Câu tường thuật (hay câu trần thuật) được gọi là (hay reported speech) dùng để tường thuật 
                        lại nội dung lời nói của người khác bằng chính ngôn ngữ của mình và không sử dụng dấu trích
                        dẫn.
                        </p>
                        <p>
                        động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p> 
                        <img className="mt-2" src="https://wanderound.com.vn/wp-content/uploads/2022/10/Co-be-nguoi-ca-Ponyo-xung-dang-duoc-cong-nhan-nhieu-hon-the-1.jpg" />
                        <p className="text-sm italic">Cô bé người cá Bonyo</p>
                        <p className="mt-6">Ví dụ:</p>
                        <p>
                            Jenny said that her parents were fine. (Jenny nói rằng ba mẹ cô ấy đều khỏe.)
                            He asked me where I came from. (Anh ấy đã hỏi tôi rằng tôi đến từ đâu.)
                            Ngoài việc tường thuật lại lời nói, người viết/nói có thể tường thuật lại suy nghĩ của đối tượng khác.
                            Các động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p>
                    </div>
                </section>
                <section id="gp2" className="scroll-mt-12">
                    <div className = "w-full ">
                        <h1 className="font-bold text-xl">1. Về Biogas HDPE</h1>
                        <p>
                        Câu tường thuật (hay câu trần thuật) được gọi là (hay reported speech) dùng để tường thuật 
                        lại nội dung lời nói của người khác bằng chính ngôn ngữ của mình và không sử dụng dấu trích
                        dẫn.
                        </p>
                        <p>
                        động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p> 
                        <img className="mt-2" src="https://wanderound.com.vn/wp-content/uploads/2022/10/Co-be-nguoi-ca-Ponyo-xung-dang-duoc-cong-nhan-nhieu-hon-the-1.jpg" />
                        <p className="text-sm italic">Cô bé người cá Bonyo</p>
                        <p className="mt-6">Ví dụ:</p>
                        <p>
                            Jenny said that her parents were fine. (Jenny nói rằng ba mẹ cô ấy đều khỏe.)
                            He asked me where I came from. (Anh ấy đã hỏi tôi rằng tôi đến từ đâu.)
                            Ngoài việc tường thuật lại lời nói, người viết/nói có thể tường thuật lại suy nghĩ của đối tượng khác.
                            Các động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p>
                    </div>
                </section>
                <section id="gp3" className="scroll-mt-12">
                    <div className = "w-full ">
                        <h1 className="font-bold text-xl">1. Về Biogas HDPE</h1>
                        <p>
                        Câu tường thuật (hay câu trần thuật) được gọi là (hay reported speech) dùng để tường thuật 
                        lại nội dung lời nói của người khác bằng chính ngôn ngữ của mình và không sử dụng dấu trích
                        dẫn.
                        </p>
                        <p>
                        động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p> 
                        <img className="mt-2" src="https://wanderound.com.vn/wp-content/uploads/2022/10/Co-be-nguoi-ca-Ponyo-xung-dang-duoc-cong-nhan-nhieu-hon-the-1.jpg" />
                        <p className="text-sm italic">Cô bé người cá Bonyo</p>
                        <p className="mt-6">Ví dụ:</p>
                        <p>
                            Jenny said that her parents were fine. (Jenny nói rằng ba mẹ cô ấy đều khỏe.)
                            He asked me where I came from. (Anh ấy đã hỏi tôi rằng tôi đến từ đâu.)
                            Ngoài việc tường thuật lại lời nói, người viết/nói có thể tường thuật lại suy nghĩ của đối tượng khác.
                            Các động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p>
                    </div>
                </section>
                <section id="gp4" className="scroll-mt-12">
                    <div className = "w-full ">
                        <h1 className="font-bold text-xl">1. Về Biogas HDPE</h1>
                        <p>
                        Câu tường thuật (hay câu trần thuật) được gọi là (hay reported speech) dùng để tường thuật 
                        lại nội dung lời nói của người khác bằng chính ngôn ngữ của mình và không sử dụng dấu trích
                        dẫn.
                        </p>
                        <p>
                        động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p> 
                        <img className="mt-2" src="https://wanderound.com.vn/wp-content/uploads/2022/10/Co-be-nguoi-ca-Ponyo-xung-dang-duoc-cong-nhan-nhieu-hon-the-1.jpg" />
                        <p className="text-sm italic">Cô bé người cá Bonyo</p>
                        <p className="mt-6">Ví dụ:</p>
                        <p>
                            Jenny said that her parents were fine. (Jenny nói rằng ba mẹ cô ấy đều khỏe.)
                            He asked me where I came from. (Anh ấy đã hỏi tôi rằng tôi đến từ đâu.)
                            Ngoài việc tường thuật lại lời nói, người viết/nói có thể tường thuật lại suy nghĩ của đối tượng khác.
                            Các động từ tường thuật như say, tell, ask, instruct, explain, mention, suggest, exclaim, acknowledge… vẫn được sử dụng nhưng phần trích dẫn đã được điều chỉnh cho phù hợp.
                        </p>
                    </div>
                </section>
                </ScrollSpy>
            </div>
            <div id = "TimHieuThem" className = "flex-column w-40 sticky top-14 self-start">
            <h2 className="font-bold">Tìm hiểu thêm</h2>
            <div className="flex flex-col gap-2 justify-evenly mt-1 text-xs">
                <p>Men vi sinh khử mùi</p>    
                <hr className="border-1 border-black w-4/5"/>
                <p>Sàng tách phân</p>    
                <hr className="border-1 border-black w-4/5"/>
                <p>Xử lý nước thải chăn nuôi</p>
            </div>    
        </div> 
        </main>
    )
}