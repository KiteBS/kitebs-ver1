import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, LogIn, LayoutDashboard } from "lucide-react";
import FileUpload from "@/components/FileUpload";
import { checkSubscription } from "@/lib/subscription";
import SubscriptionButton from "@/components/SubscriptionButton";
import { chats } from "@/lib/db/schema";
import { users } from "@/lib/db/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();
  const isAuth = !!userId;
  const isPro = await checkSubscription();
  let firstChat;
  let active_user_id;
  if (userId) {
    // Check if userId already exists in the users table
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.user_id, userId));

    if (!existingUser || existingUser.length === 0) {
      // Insert a new entry if the user does not exist in the users table
      const userInsertResult = await db
        .insert(users)
        .values({
          user_id: userId,
          user_name: user?.firstName,
        })
        .returning({
          insertedID: users.id,
        });

      active_user_id = userInsertResult[0].insertedID;
    } else {
      // Use the existing user_id if the user already exists in the users table
      active_user_id = existingUser[0].id;
    }

    firstChat = await db
      .select()
      .from(chats)
      .where(eq(chats.user_id, active_user_id));
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }
  const hasPastChats = !!firstChat;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              {isAuth ? (
                <div>
                  <h1 className="mr-2 text-4xl font-semibold">
                    Hi {user?.firstName}
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 className="mr-3 text-5xl font-semibold">
                    Elevate Life - Fly With Kite
                  </h1>
                  <div className="max-w-xl mt-2 text-xl">
                    <p>
                      Join millions of students, researchers, and professionals
                      to instantly understand PDFs
                    </p>
                  </div>
                </div>
              )}

              <UserButton afterSignOutUrl="/"></UserButton>
            </div>

            <div className="flex mt-2">
              {isAuth && (
                <div>
                  <SubscriptionButton isPro={isPro} />
                </div>
              )}
            </div>

            <div className="w-full gap-4 mt-2">
              <div>
                {" "}
                {isAuth ? (
                  <Link href="/sign-in">
                    <Button>
                      Dashboard
                      <LayoutDashboard className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="/sign-in">
                    <Button>
                      Log in
                      <LogIn className="w-4 h-4 ml-2"></LogIn>
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                {" "}
                {!isAuth && (
                  <Link href="/sign-up">
                    <Button>
                      Sign up
                      <LogIn className="w-4 h-4 ml-2"></LogIn>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsFooter />
    </>
  );
}
