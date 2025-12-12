interface buttonProps {
  hidden?: boolean;
}

export default function Button({ hidden }: buttonProps) {
  return (
    <a className={`${hidden && "md:hidden lg:block"}`} href="/#">
      <button
        className="px-10 py-3 text-this-gray-50 text-[16px] font-bold rounded-4xl bg-linear-to-bl from-this-green-500 to-this-cyan-400  cursor-pointer transition-opacity duration-200 hover:opacity-50"
      >
        Request Invite
      </button>
    </a>
  );
}
