import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import StorySection from "@/components/StorySection";

//Todo: everyone can see the morse story
//? auth users can see translated and add a paragraph and edit their own part
//* in future a page for learning morse code
//workflow: instead of next page part tutorial for website
//after tutorial show stories
//a page for each story with a translate button that replaces the morse code and a part for submitting paragraph

export default function Index() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          <SignUpUserSteps />
          <h2 className="font-bold text-4xl mb-4">Stories</h2>
          <StorySection />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
