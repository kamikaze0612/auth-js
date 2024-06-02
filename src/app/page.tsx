import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Homepage: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8E2DE2] to-[#4A00E0]">
      <Card>
        <CardHeader>
          <h1>Hello from the other side</h1>
        </CardHeader>
        <CardContent>Hello Auth.js I will fuck you up good</CardContent>
      </Card>
    </main>
  );
};

export default Homepage;
