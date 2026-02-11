import { Button } from '@/components/livekit/button';

function WelcomeImage() {
  return (
    <img
      src="/arcreactor.png"
      alt="Arc Reactor"
      width="256"
      height="256"
      className="mb-4 size-16"
    />
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref}>
      <section className="bg-transparent flex flex-col items-center justify-center text-center min-h-svh">
        <WelcomeImage />

        <p className="text-foreground max-w-prose pt-1 leading-6 font-medium">
          Chat with N.E.U.R.A. 
        </p>

        <Button variant="primary" size="lg" onClick={onStartCall} className="mt-6 w-64 font-mono">
          {startButtonText}
        </Button>
      </section>

      <div className="fixed bottom-5 left-0 flex w-full items-center justify-center">
        
      </div>
    </div>
  );
};
