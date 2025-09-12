"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
Globe,
MonitorPlay,
SquarePen,
Fingerprint,
Activity,
Bot,
LineChart,
HeartHandshake,
} from "lucide-react";

const features = [
{
icon: <Bot className="w-10 h-10 text-primary" />,
title: "AI-Powered Therapy",
description:
"24/7 access to empathetic AI agents' emotion detection helps understand your mental state and provide appropriate interventions.",
},
{
icon: <HeartHandshake className="w-10 h-10 text-primary" />,
title: "Counsellor Integration",
description:
"Booking time made simple—pick a slot that works for you and you’re all set.",
},
{
icon: <Fingerprint className="w-10 h-10 text-primary" />,
title: "Anonymity",
description:
"Guarantees 100% anonymity, reducing stigma and encouraging help-seeking behavior.",
},
{
icon: <SquarePen className="w-10 h-10 text-primary" />,
title: "Screening Tools",
description: "Questionnaires (like PHQ-7/GAD-9) can detect up to 70% of undiagnosed cases.",
},
{
icon: <LineChart className="w-10 h-10 text-primary" />,
title: "Analytical Dashboard",
description:
"Provides detailed reports on behavioral trends, overall state of the institution, and data of previously used methods for tackling stress levels.",
},
{
icon: <Activity className="w-10 h-10 text-primary" />,
title: "Crisis Detection",
description:
"Real-time monitoring and emergency response protocols to ensure your safety during critical situations.",
},
{
icon: <Globe className="w-10 h-10 text-primary" />,
title: "Multilanguage Support",
description:
"Making sure everyone can use it easily in their own language, no matter where they’re from.",
},
{
