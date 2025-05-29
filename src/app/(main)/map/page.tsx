
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function MapPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Interactive Map of Lucknow</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Explore Lucknow's attractions on our interactive map. Find locations, get directions, and plan your visit efficiently.
          (Full map integration coming soon!)
        </p>
      </section>
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Lucknow City Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
            <Image 
              src="https://placehold.co/800x450.png" 
              alt="Map of Lucknow" 
              layout="fill"
              objectFit="cover"
              data-ai-hint="Lucknow map detailed"
            />
            <p className="absolute inset-0 flex items-center justify-center text-background bg-black/30 text-xl font-semibold">
              Map Placeholder - Interactive Map Coming Soon
            </p>
          </div>
        </CardContent>
      </Card>
      <section className="mt-8 text-center">
          <p className="text-muted-foreground">
            While our interactive map is under development, you can use standard map services to locate these attractions.
          </p>
      </section>
    </div>
  );
}
