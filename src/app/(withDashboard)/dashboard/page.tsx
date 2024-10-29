import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            {session?.user && (
                <>
                    <h1 className="text-4xl text-center mt-10">
                        Welcome To Dashboard, {session?.user?.name}
                    </h1>
                    <div className="flex flex-col items-center justify-center w-full ">
                        <Image
                            src={session?.user?.image as string}
                            alt={session?.user?.name as string}
                            width={100}
                            height={100}
                        />
                        <h2>
                            <span>Email-</span>
                            <span>{session?.user?.email}</span>
                        </h2>
                    </div>
                </>
            )}
        </div>
    );
};

export default DashboardPage;
