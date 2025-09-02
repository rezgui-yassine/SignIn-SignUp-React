import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Github, Mail } from 'lucide-react';

export function AuthForms() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="space-y-1 text-center pb-4">
          <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Welcome
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-purple-50 border border-purple-200">
              <TabsTrigger 
                value="signin" 
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-purple-600 hover:text-purple-800 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-firstname">First Name</Label>
                    <Input
                      id="signup-firstname"
                      type="text"
                      placeholder="John"
                      required
                      className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-lastname">Last Name</Label>
                    <Input
                      id="signup-lastname"
                      type="text"
                      placeholder="Doe"
                      required
                      className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                    required
                    className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    placeholder="Confirm your password"
                    required
                    className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <span className="text-purple-600 hover:underline cursor-pointer">
                      Terms of Service
                    </span>{' '}
                    and{' '}
                    <span className="text-purple-600 hover:underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button
                variant="outline"
                onClick={() => handleSocialLogin('google')}
                className="w-full border-purple-200 hover:bg-purple-50 hover:border-purple-300"
              >
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                Google
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSocialLogin('github')}
                className="w-full border-purple-200 hover:bg-purple-50 hover:border-purple-300"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}