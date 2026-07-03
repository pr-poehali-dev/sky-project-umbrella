import { ThemeProvider } from "next-themes";
import {
  WaitlistForm,
  WaitlistWrapper,
  MeshGradient,
} from "@/components/waitlist";

const Index = () => {
  const handleSubmit = async (
    email: string
  ): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    console.log("Submitting email:", email);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Demo: always succeed
    return { success: true };
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12">
        <MeshGradient
          colors={["#0f0326", "#7c3aed", "#06b6d4", "#ec4899"]}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="max-w-screen-sm mx-auto w-full relative z-[1] flex flex-col min-h-screen items-center justify-center">
          <div className="px-5 gap-8 flex flex-col">
            <main className="flex justify-center">
              <WaitlistWrapper
                logo={{
                  src: "https://cdn.poehali.dev/projects/3b7b13f1-8ac2-4765-a8d4-b540aa45a6e1/files/6b12bf69-455a-4201-b997-02bca8319f68.jpg",
                  alt: "Game Logo",
                }}
                copyright="Разработано"
                copyrightLink={{ text: "нашей студией", href: "#" }}
                showThemeSwitcher={true}
              >
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-medium text-slate-12 whitespace-pre-wrap text-pretty">
                    Закрытый бета-тест
                  </h1>
                  <p className="text-slate-10 tracking-tight text-pretty">
                    Мы запускаем новую игру и открываем ранний доступ. Оставьте
                    email — и вы одними из первых получите ключ в бету.
                  </p>
                </div>
                <div className="px-1 flex flex-col w-full self-stretch">
                  <WaitlistForm
                    onSubmit={handleSubmit}
                    placeholder="Введите ваш email"
                    buttonCopy={{
                      idle: "Хочу в бету",
                      loading: "Отправка...",
                      success: "Вы в списке!",
                    }}
                  />
                </div>
              </WaitlistWrapper>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;