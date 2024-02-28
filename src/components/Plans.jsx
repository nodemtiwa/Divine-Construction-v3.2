
import { data } from '../utils/data'
import PlanItem from './PlanItem'

export default async function Plans() {
    const { plans } = data

    if (!plans) {
        return <div>No plans found</div>
    }
    return (
        <div className="container mx-auto px-4">
            <div className=" grid gap-y-12 sm:grid-cols-2 xl:grid-cols-4  sm:gap-x-6 ">
                {plans.map((plan, index) => (
                    <PlanItem key={index} plan={plan} />
                ))}
            </div>
        </div>
    )
}
