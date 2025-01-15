import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h2 className="text-3xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Profile
                    </h2>
                    <p>Update your personal information</p>
                </>
            }

            breadcrumbs={[{title: 'Profile Edit'}]}
        >
            <Head title="Profile"/>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                            <div
                                className="bg-background p-4 sm:rounded-lg sm:p-8 border-opacity-10 shadow">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>

                            <div
                                className="bg-background p-4 sm:rounded-lg sm:p-8 border-opacity-10 shadow">
                                <UpdatePasswordForm className="max-w-xl"/>
                            </div>

                            <div
                                className="bg-background p-4 sm:rounded-lg sm:p-8 border-opacity-10 shadow">
                                <DeleteUserForm className="max-w-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
