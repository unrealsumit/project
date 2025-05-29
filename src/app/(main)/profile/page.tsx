
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Settings, LogOut } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">User Profile</h1>
      </section>

      <Card className="shadow-xl">
        <CardHeader className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
            <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="profile avatar" />
            <AvatarFallback className="text-3xl bg-accent text-accent-foreground">
              LN
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl text-primary">Lucknow Navigator User</CardTitle>
          <CardDescription className="text-muted-foreground">user@example.com</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start text-lg py-6 border-primary/50 hover:bg-primary/10">
            <User className="mr-3 h-5 w-5 text-accent" /> Edit Profile
          </Button>
          <Button variant="outline" className="w-full justify-start text-lg py-6 border-primary/50 hover:bg-primary/10">
            <Settings className="mr-3 h-5 w-5 text-accent" /> Account Settings
          </Button>
           <Button variant="outline" className="w-full justify-start text-lg py-6 border-primary/50 hover:bg-primary/10">
            <Settings className="mr-3 h-5 w-5 text-accent" /> Language Preferences
          </Button>
          <Button variant="destructive" className="w-full justify-start text-lg py-6">
            <LogOut className="mr-3 h-5 w-5" /> Log Out
          </Button>
          <p className="text-xs text-muted-foreground text-center pt-4">
            User authentication and profile management features are currently under development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
