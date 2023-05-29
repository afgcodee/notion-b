import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";
import Container from "@/components/layout/Container";

function blogpage() {
  return (
    <>
      <Container>
        <BpgaeHeader />
        <div className="max-lg:flex max-lg:flex-col bpagegrid">
          <BpageContent />
          <BpageSidebar />
        </div>
      </Container>
    </>
  );
}

const BpgaeHeader = () => {
  return (
    <div className="flex flex-col py-[24px]">
      <div>
        <Link
          className="inline-flex items-center gap-3 text-[14px] text-gray-200 hover:text-white hover-500"
          href="/"
        >
          <BsArrowLeftShort className="w-[21px] h-[21px]" />{" "}
          <span>Back to Blog</span>
        </Link>
      </div>
      <div className="flex flex-col gap-7 mt-[65px]">
        <div className="flex items-center gap-3 text-[14px] font-light">
          <span className="py-[6px] px-[12px] rounded-[32px] whitespace-nowrap bg-danger-800 text-danger border-[1px] border-danger">
            Company News
          </span>
          <span className="text-secondary-900">Monday, May 1st 2023</span>
        </div>
        <h1 className="text-[48px] font-semibold tracking-[-.04em] leading-[1.25]">
          Vercel Web Analytics is now generally available
        </h1>
        <p className="text-[24px] text-secondary-900 tracking-[-.04em] leading-[1.5]">
          Get detailed, first-party page views, traffic analytics, and now
          custom events with Vercel Web Analytics
        </p>
      </div>
    </div>
  );
};

const BpageSidebar = () => {
  const userImage = "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=600"
  return (
    <div className="mx-5">
      <h2>Posted by</h2>
      {/* Author Component - Start */}
      <div className="flex gap-4 items-center my-3">
        <Image
          src={userImage}
          alt="author"
          className="w-[40px] h-[40px] !rounded-full object-fill"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <h6 className="text-[17px] font-medium">Chris Widmaier</h6>
          <span className="text-[14px] font-normal text-gray-200">
            Engineering Manager{" "}
          </span>
        </div>
      </div>
      {/* Author Component - End */}
    </div>
  );
};

const BpageContent = () => {
  return (
    <div className="lg:border-r-[1px] lg:border-danger-900">
      <h2>Content</h2>
    </div>
  );
};

export default blogpage;
