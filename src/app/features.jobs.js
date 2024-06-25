import Feature from "./features.feature"

export default function JobFeatures() {
    return (
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
            <Feature
                title="Find Companies"
                image="/CompanyFeed.png"
                color="text-blue-300"
                description="Browse through our list of recommended companies and follow them to stay updated on new internships and general news."
            />
            <Feature
                title="Stay Up-to-Date"
                image="/CompanyNews.png"
                color="text-blue-300"
                description="Take advantage of our X (Formerly Twitter) integration to stay updated on the companies' current affairs."
            />
            <Feature
                title="Find Opportunities"
                color="text-blue-300"
                image="/CompanyMockup.png"
                description="Find Internships catered towards students and apply to them directly from the app."
            />
        </div>
    )
}