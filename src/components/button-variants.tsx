import { Button } from './ui/button';

export function ButtonVariants() {
    return (
        <div className="space-y-8 p-6">
            <div>
                <h3 className="mb-4">Primary Buttons</h3>
                <div className="flex flex-wrap gap-3">
                    <Button>Default</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </div>

            <div>
                <h3 className="mb-4">Destructive Buttons</h3>
                <div className="flex flex-wrap gap-3">
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="destructive" size="sm">
                        Small Destructive
                    </Button>
                    <Button variant="destructive" size="lg">
                        Large Destructive
                    </Button>
                    <Button variant="destructive" disabled>
                        Disabled Destructive
                    </Button>
                </div>
            </div>
        </div>
    );
}
