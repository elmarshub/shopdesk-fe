"use client";

import Logo from "@/components/functional/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import profilePhoto from "@/public/Avatar.svg";
import notification from "@/public/icons/_ui-bell-03.svg";
import stock from "@/public/icons/_ui-box.svg";
import business from "@/public/icons/_ui-briefcase-01.svg";
import billing from "@/public/icons/_ui-credit-card-02.svg";
import account from "@/public/icons/_ui-edit-02.svg";
import logout from "@/public/icons/_ui-log-out-02.svg";
import menuIcon from "@/public/icons/_ui-menu-01.svg";
import settings from "@/public/icons/_ui-settings-01.svg";
import deleteIcon from "@/public/icons/_ui-trash-03-red.svg";
import viewDeleted from "@/public/icons/_ui-trash-03.svg";
import user from "@/public/icons/_ui-user-edit.svg";
import { useStore } from "@/store/useStore";

import { ChevronDown, Plus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const { organizationId, organizationName, organizationInitial } = useStore();
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  //Active Tab
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="md:px-6 px-1 py-4 w-full max-w-[1440px] mx-auto flex flex-col main-h-svh ">
      <div className="lg:border px-4 py-2 lg:shadow-md rounded-lg lg:flex items-center justify-between mx-auto w-full flex">
        <div className="flex items-center gap-6">
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <Logo />
          </div>
          <small className="text-black text-left hidden lg:block">
            The simplest way to manage your shop!
          </small>
        </div>

        <DropdownMenu modal>
          <DropdownMenuTrigger className="btn-primary hover:cursor-pointer hidden lg:flex items-center gap-2 text-white">
            <span className="py-2 px-4 rounded-lg bg-white text-black">
              {organizationInitial}
            </span>
            {organizationName}
            <ChevronDown strokeWidth={1.5} color="white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="hidden lg:block">
            <DropdownMenuItem
              className=" p-4  w-[200px] flex"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={viewDeleted} alt="" width={20} height={20} />
              View Deleted
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px] "
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Link
                href="/dashboard/settings"
                target="_"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <Image
                  src={settings}
                  className=""
                  alt=""
                  width={20}
                  height={20}
                />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px] text-[#ff1925] "
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={logout} alt="" width={20} height={20} />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu modal>
          <DropdownMenuTrigger className="hover:cursor-pointer flex lg:hidden items-center gap-2 text-white">
            <Image src={menuIcon} alt="" width={20} height={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="block lg:hidden">
            <DropdownMenuItem
              className=" p-4  w-[200px] flex"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={viewDeleted} alt="" width={20} height={20} />
              View Deleted
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px] "
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Link
                href="/dashboard/settings"
                target="_"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <Image
                  src={settings}
                  className=""
                  alt=""
                  width={20}
                  height={20}
                />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className=" p-4  w-[200px]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={account} alt="" width={20} height={20} />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={business} alt="" width={20} height={20} />
              Business
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={stock} alt="" width={20} height={20} />
              Stock Preference
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={notification} alt="" width={20} height={20} />
              Notification
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={billing} alt="" width={20} height={20} />
              Billing & Subscription
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={user} alt="" width={20} height={20} />
              User Permission
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className=" p-4  w-[200px] text-[#ff1925]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={logout} alt="" width={20} height={20} />
              Log out
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" p-4  w-[200px] text-[#ff1925]"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <Image src={deleteIcon} alt="" width={20} height={20} />
              Delete Account
            </DropdownMenuItem>{" "}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-8 w-full h-full md:mt-16 mt-8">
        <div className="space-y-0 w-full ">
          <Tabs defaultValue="account" className="w-full gap-0 ">
            <div className=" gap-4 items-center w-full hidden lg:flex">
              <TabsList className=" rounded-b-none border-[1px] border-b-0  border-[#e9eaeb] ">
                <TabsTrigger value="account" className="lg:text-[20px] text-sm">
                  Account
                </TabsTrigger>
                <div className="h-[20px] w-[2px] bg-[#83838b] xl:mx-4 mx-1"></div>
                <TabsTrigger
                  value="business"
                  className="lg:text-[20px] text-sm"
                >
                  Business
                </TabsTrigger>
                <div className="h-[20px] w-[2px] bg-[#83838b] xl:mx-4 mx-1"></div>
                <TabsTrigger
                  value="stockPreference"
                  className="lg:text-[20px] text-sm"
                >
                  Stock Preference
                </TabsTrigger>
                <div className="h-[20px] w-[2px] bg-[#83838b] xl:mx-4 mx-1"></div>
                <TabsTrigger
                  value="notification"
                  className="lg:text-[20px] text-sm"
                >
                  Notification
                </TabsTrigger>
                <div className="h-[20px] w-[2px] bg-[#83838b] xl:mx-4 mx-1"></div>
                <TabsTrigger
                  value="billingSubscription"
                  className="lg:text-[20px] text-sm"
                >
                  {" "}
                  Billing & Subscription
                </TabsTrigger>
                <div className="h-[20px] w-[2px] bg-[#83838b] xl:mx-4 mx-1"></div>
                <TabsTrigger
                  value=" userPermission"
                  className="lg:text-[20px] text-sm"
                >
                  {" "}
                  User Permission
                </TabsTrigger>
              </TabsList>

              <div className="relative  m-3 ml-0">
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
                />

                <Search className="text-[#667085] absolute top-3 left-3 " />
              </div>
            </div>

            <TabsContent
              value="account"
              className="w-full md:border-[1px] border-0  md:border-t-0 p-8 rounded-[12px] rounded-t-none flex flex-col justify-between gap-12"
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
          </Tabs>
          <div className="flex w-full overflow-hidden mx-auto"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 absolute bottom-5 text-center left-1/2 -translate-x-1/2  w-full ">
        <p className="text-center mt-4">
          © {new Date().getFullYear()}, Powered by Timbu Business
        </p>
      </div>
    </main>
  );
};
export default Page;
