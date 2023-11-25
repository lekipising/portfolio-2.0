import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className="md:w-[600px] w-auto mx-4 md:mt-0 mt-16 mb-16 md:mx-auto bg-dark-100/20 rounded-lg p-4">
            <div className='flex justify-between'><div className="w-[110px]">
                <motion.h2 className="heading-gradient text-lg font-semibold text-white">
                    Experience
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="heading-gradient-underline h-[1px]"
                />
            </div><span className="text-xs text-gray-500 bg-dark-100 !leading-none flex justify-center items-center px-2 pt-1.5 py-1 rounded-lg">04 Years</span></div>


            <div className="mt-8 flex flex-col gap-0">
                <motion.div initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ ease: "easeIn", duration: 0.3, delay: 0.3 }} viewport={{amount:1,once: true}} className="flex items-center gap-3 pb-3 relative">
                    <div className='h-full w-[1px] bg-gray-200 absolute left-2 inset-y-0 top-2 z-10' />
                    <div className="h-4 w-4 bg-green/30 self-start rounded-full flex justify-center items-center mr-2 relative z-20">
                        <div className='h-3 w-3 rounded-full bg-green' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='w-full md:justify-between gap-2 flex md:items-center md:flex-row flex-col'>
                            <h3 className="font-bold text-gray-100">Knack Inc</h3>
                            <span className="text-gray-100 text-xs">Apr 2022 - Present</span>
                        </div>
                        <p className="text-gray-400 font-medium text-sm">Software Engineer - Full-time</p>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ ease: "easeIn", duration: 0.3, delay: 0.4 }} viewport={{amount:1,once: true}} className="flex items-center gap-3 py-3 relative">
                    <div className='h-full w-[1px] bg-gray-200 absolute left-2 inset-y-0 top-2 z-10' />
                    <div className="h-3 w-3 ml-0.5 bg-gray-200 self-start rounded-full flex justify-center items-center mr-2 relative z-20">
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='w-full md:justify-between gap-2 flex md:items-center md:flex-row flex-col'>
                            <h3 className="font-bold text-gray-100">Irembo</h3>
                            <span className="text-gray-100 text-xs">May 2023 - Aug 2023</span>
                        </div>
                        <p className="text-gray-400 font-medium text-sm">Software Engineer Intern</p>

                    </div>
                </motion.div>
                <motion.div initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ ease: "easeIn", duration: 0.3, delay: 0.5 }} viewport={{amount:1,once: true}} className="flex items-center gap-3 py-3 relative">
                    <div className='h-full w-[1px] bg-gray-200 absolute left-2 inset-y-0 top-2 z-10' />
                    <div className="h-3 w-3 ml-0.5 bg-gray-200 self-start rounded-full flex justify-center items-center mr-2 relative z-20">
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='w-full md:justify-between gap-2 flex md:items-center md:flex-row flex-col'>
                            <h3 className="font-bold text-gray-100">Savannah Informatics</h3>
                            <span className="text-gray-100 text-xs">Jun 2022 - Sept 2022</span>
                        </div>

                        <p className="text-gray-400 font-medium text-sm">Software Engineer - Full-time</p>

                    </div>
                </motion.div>
                <motion.div initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ ease: "easeIn", duration: 0.3, delay: 0.6 }} viewport={{amount:1, once: true}} className="flex items-center gap-3 py-3 relative">
                    <div className='h-4/5 w-[1px] bg-gray-200 absolute left-2 inset-y-0 top-2 z-10' />
                    <div className="h-3 w-3 ml-0.5 bg-gray-200 self-start rounded-full flex justify-center items-center mr-2 relative z-20">
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='w-full md:justify-between gap-2 flex md:items-center md:flex-row flex-col'>
                            <h3 className="font-bold text-gray-100">Fress Inc</h3>
                            <span className="text-gray-100 text-xs">Jul 2021 - Apr 2022</span>
                        </div>
                        <p className="text-gray-400 font-medium text-sm">Frontend Developer - Full-time</p>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;