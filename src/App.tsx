import { ButtonVariants } from './components/button-variants';
import { DeleteAccountModal } from './components/delete-account-modal';
import { CreateUserModal } from './components/create-user-modal';

export default function App() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1>Button Variants & Modal Components</h1>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="mb-6">Button Variants</h2>
                        <div className="border rounded-lg">
                            <ButtonVariants />
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6">Modal Components</h2>
                        <div className="border rounded-lg p-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="mb-2">
                                        Delete Account Modal
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        A destructive action modal that requires
                                        confirmation to proceed
                                    </p>
                                    <DeleteAccountModal />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
