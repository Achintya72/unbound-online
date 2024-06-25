import Feature from "./features.feature"

export default function CollegeFeatures() {
    return (
        <div className="flex gap-[20px] w-full">
            <Feature 
                title="Find Colleges"
                image="/CollegeFeed.png" 
                color="text-purple-300"
                description="Browse through our list of recommended colleges, and follow them to receive any and all news regarding them."    
            />
            <Feature 
                title="Check if it Fits"
                image="/CollegeCampus.png" 
                color="text-purple-300"
                description="Find statistics about student life, activities, popular majors, acceptance rates, tuition, and more to see if this is the right college for you."    
            />
            <Feature 
                title="Stay on Top of Applications" 
                color="text-purple-300"
                image="/CollegeApply.png" 
                description="Use that college's profile page to stay up-to-date on admission deadlines. Use the links to directly be taken to their application portal."    
            />
        </div>
    )
}