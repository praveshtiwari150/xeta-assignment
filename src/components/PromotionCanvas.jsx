import React, { useEffect } from 'react';
import HeaderSection from './HeaderSection';

const PromotionCanvas = () => {
    useEffect(() => {
        const canvas = document.getElementById('net-canvas');
        const ctx = canvas.getContext('2d');

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();

        const nodes = [];
        const nodeCount = 300;
        const maxDistance = 90;

        class Node {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
            }
        }

        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new Node());
        }

        const animateNetwork = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodes.forEach((node, index) => {
                node.update();
                node.draw();

                for (let j = index + 1; j < nodes.length; j++) {
                    const otherNode = nodes[j];
                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animateNetwork);
        };

        animateNetwork();

        window.addEventListener('resize', () => {
            setCanvasSize();
        });

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <div className='relative p-4 bg-[#5E9ED7] flex flex-col md:flex-row justify-center items-center min-h-[480px]'>
            <div className='relative z-10 w-full md:w-[50%]'>
                <HeaderSection
                    heading={"Elevate your fitness with experts"}
                    headingSize={"text-4xl"}
                />
            </div>
            <div className='relative z-10 w-full md:w-[50%] flex justify-center items-center'>
                <div className='bg-white flex flex-col justify-center items-center gap-2 rounded-lg z-20'>
                    <iframe
                        src="https://www.youtube.com/embed/9v9-JFQcib0"
                        title="YouTube video player"
                        allow=""
                        className='w-48 sm:w-max rounded-lg m-2 z-1'
                    />
                    <div className='text-sm m-2 font-roboto font-light z-1'>Exercise Tutorial - Squat</div>
                </div>
            </div>
            <canvas id='net-canvas' className='absolute inset-0 w-full h-full z-0' />
        </div>
    );
}

export default PromotionCanvas;
