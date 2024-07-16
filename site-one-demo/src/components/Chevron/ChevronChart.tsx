import { Paper } from '@mui/material';
import { useMemo } from 'react';
import { useIsMobile } from '../../lib/general-hooks';
import './chevron.css'

interface ChevronChartProps {
    checks: boolean[]
}

const ChevronChart = ({ checks }: ChevronChartProps) => {

    const isMobile = useIsMobile()
    
    const slicedChecks = useMemo(() => 
        checks.slice(0, 4)
    , [checks])

    return (
        <Paper>
            <div 
                id={'chevron'}
                className={isMobile ? 'mobile' : ''}
            >
                <ul>
                    {slicedChecks.map((check, index) => 
                        check ?
                            <li key={index} >
                                <div className={`color_${ index }`} />
                            </li>
                        :
                            null
                    )}
                </ul>
            </div>
        </Paper>
    )
}
  
export default ChevronChart