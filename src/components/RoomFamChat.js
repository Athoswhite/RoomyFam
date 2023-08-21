import Link from "next/link";
import React, { useState } from "react";

const RoomFamChat = () => {
  return (
    <div>
      <div class=" justify-center p-16 ">
      <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">RoomFam Help Center</span>
              </div>
        <div class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:flex-row ">
          <img
            class="h-96 w-full rounded-t-lg object-cover md:h-30 md:w-auto md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-200">
            Welcome to our RoomFam Help Center! This page is designed to provide useful information and support to our valued RoomFam who use our website to connect with tenants and advertise their rental properties.
            </p>
            <p class="text-xs text-neutral-500 dark:text-300">
            We are here to assist you with any questions or concerns you may have about using our platform.
            </p>
            <br />
            <br />
            <div class="flex justify-left space-x-2">
              <button
                type="button"
                
                class="inline-block rounded-full bg-amber-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                RoomFam Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default RoomFamChat;
