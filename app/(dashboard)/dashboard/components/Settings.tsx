"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/public/Avatar.svg";
import notification from "@/public/icons/_ui-bell-03.svg";
import stock from "@/public/icons/_ui-box.svg";
import business from "@/public/icons/_ui-briefcase-01.svg";
import billing from "@/public/icons/_ui-credit-card-02.svg";
import account from "@/public/icons/_ui-edit-02.svg";
import user from "@/public/icons/_ui-user-edit.svg";
import deleteIcon from "@/public/icons/_ui-trash-03-red.svg";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

function Settings() {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="space-y-8 w-full h-full md:mt-8 mt-4">
      <div className="space-y-0 w-full ">
        <Tabs defaultValue="account" className="w-auto gap-0 ">
          <div className="gap-4 items-center hidden lg:flex ">
            <TabsList className="rounded-b-none border-[1px] border-b-0 border-[#e9eaeb] ">
              <TabsTrigger
                value="account"
                className="lg:text-[16px] text-sm px-2"
              >
                Account
              </TabsTrigger>
              <div className="h-[16px] w-[1px] bg-[#83838b] mx-1"></div>
              <TabsTrigger
                value="business"
                className="lg:text-[16px] text-sm px-2"
              >
                Business
              </TabsTrigger>
              <div className="h-[16px] w-[1px] bg-[#83838b] mx-1"></div>
              <TabsTrigger
                value="stockPreference"
                className="lg:text-[16px] text-sm px-2"
              >
                Stock Preference
              </TabsTrigger>
              <div className="h-[16px] w-[1px] bg-[#83838b] mx-1"></div>
              <TabsTrigger
                value="notification"
                className="lg:text-[16px] text-sm px-2"
              >
                Notification
              </TabsTrigger>
              <div className="h-[16px] w-[1px] bg-[#83838b] mx-1"></div>
              <TabsTrigger
                value="billingSubscription"
                className="lg:text-[16px] text-sm px-2"
              >
                Billing & Subscription
              </TabsTrigger>
              <div className="h-[16px] w-[1px] bg-[#83838b] mx-1"></div>
              <TabsTrigger
                value="userPermission"
                className="lg:text-[16px] text-sm px-2"
              >
                User Permission
              </TabsTrigger>
            </TabsList>

            <div className="relative ml-0">
              <input
                type="text"
                className="h-12 border xl:w-[315px] w-[200px] rounded-md focus:outline-2 focus:outline-[#009A49] px-10"
                onChange={(event) => {
                  setIsSearching(true);
                  setSearchText(event.target.value);
                  if (!event.target.value) {
                    setIsSearching(false);
                  }
                }}
                placeholder="Search settings"
              />
              <Search className="text-[#667085] absolute top-3 left-3 " />
            </div>
          </div>

          <TabsContent
            value="account"
            className="w-full md:border-[1px] border-0  md:border-t-1 p-8 rounded-[12px] rounded-t-none flex flex-col justify-between gap-12"
          >
            <div>
              <div className="flex flex-row w-full justify-between items-center gap-4  md:border-b border-[#e9eaeb] pb-6">
                <div className="w-full flex flex-col gap-4 text-[#181d27]">
                  <p className="text-xl font-[500]">Personal info</p>
                  <p>Update your photo and personal details here.</p>
                </div>
                <div className="md:flex flex-row gap-4 hidden">
                  <Button className="py-3 px-6 w-[120px] bg-white border border-[#1b1b1b] text-[#1b1b1b]">
                    Cancel
                  </Button>
                  <Button className="py-3 px-6 w-[120px]">Save</Button>
                </div>
              </div>

              <div className="flex flex-row w-full  items-center gap-4  md:border-b border-[#e9eaeb] pb-6 mt-6">
                <div className="w-1/2 md:flex flex-col gap-4 text-[#181d27] hidden">
                  <p className="text-xl font-[500] ">Your photo</p>
                  <p>This will be displayed on your profile</p>
                </div>
                <div className="flex flex-col gap-5 items-center justify-center w-full ">
                  <Image
                    src={profilePhoto}
                    alt="profile"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <Button className="py-3 px-6 rounded-[12px] bg-white border border-[#1b1b1b] text-[#1b1b1b]">
                    <Plus className="w-6 h-6" />
                    Change Photo
                  </Button>
                </div>
              </div>
              <div className="flex-col flex ">
                <div className="flex flex-col w-full items-center justify-start gap-4  md:border-b border-[#e9eaeb] pb-6 mt-6">
                  <div className="flex w-full md:items-center items-start md:flex-row flex-col gap-2 md:gap-4">
                    <p className="w-1/5">Name</p>

                    <div className="border-[1px] md:w-1/3 w-full border-[#dedede] p-4 rounded-[9px]">
                      <p className="text-[#b8b8b8]">Roland</p>
                    </div>
                    <div className="border-[1px] md:w-1/3 w-full border-[#dedede] p-4 rounded-[9px] hidden lg:block">
                      <p className="text-[#b8b8b8]">Eze</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-2 md:gap-4">
                  <div className="md:mt-4 mt-0 w-full flex md:flex-row flex-col items-center gap-2 md:gap-4">
                    <p className="md:w-1/5 w-full ">Email</p>
                    <div className="border-[1px] border-[#dedede] p-4 rounded-[9px] md:w-1/3 w-full ">
                      <p className="text-[#b8b8b8] ">Ihamrolan@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button className="bg-[#ff000d] px-6 py-3 hover:bg-[#ff000e]  cursor-pointer hidden md:block">
                Deactivate Account
              </Button>
              <p className="text-[#ff000d] text-sm hover:bg-[#ff000e] cursor-pointer md:hidden block">
                Deactivate Account
              </p>
            </div>
          </TabsContent>

          <TabsContent
            value="business"
            className="border rounded-tr-lg rounded-b-lg shadow-lg min-h-[80vh] flex flex-col bg-white"
          >
            <h2 className="text-[24px] font-semibold p-6 border-b">
              Business Settings
            </h2>
            <div className="p-6">
              <p>Business settings content</p>
            </div>
          </TabsContent>

          <TabsContent
            value="stockPreference"
            className="border rounded-tr-lg rounded-b-lg shadow-lg min-h-[80vh] flex flex-col bg-white"
          >
            <h2 className="text-[24px] font-semibold p-6 border-b">
              Stock Preference Settings
            </h2>
            <div className="p-6">
              <p>Stock preference settings content</p>
            </div>
          </TabsContent>

          <TabsContent
            value="notification"
            className="border rounded-tr-lg rounded-b-lg shadow-lg min-h-[80vh] flex flex-col bg-white"
          >
            <h2 className="text-[24px] font-semibold p-6 border-b">
              Notification Settings
            </h2>
            <div className="p-6">
              <p>Notification settings content</p>
            </div>
          </TabsContent>

          <TabsContent
            value="billingSubscription"
            className="border rounded-tr-lg rounded-b-lg shadow-lg min-h-[80vh] flex flex-col bg-white"
          >
            <h2 className="text-[24px] font-semibold p-6 border-b">
              Billing & Subscription
            </h2>
            <div className="p-6">
              <p>Billing and subscription settings content</p>
            </div>
          </TabsContent>

          <TabsContent
            value="userPermission"
            className="border rounded-tr-lg rounded-b-lg shadow-lg min-h-[80vh] flex flex-col bg-white"
          >
            <h2 className="text-[24px] font-semibold p-6 border-b">
              User Permission Settings
            </h2>
            <div className="p-6">
              <p>User permission settings content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Settings;
