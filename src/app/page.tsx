'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone, Home, FileText, Shield, Users, ChevronDown, Check,
  Eye, EyeOff, Calculator, Bell, Upload, Search, FileCheck, X,
  Sparkles, Zap, Lock, Code, ExternalLink
} from 'lucide-react'

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
      <div className="orb w-96 h-96 bg-cmg-green -top-48 -left-48" />
      <div className="orb w-80 h-80 bg-neon-blue top-1/3 -right-40" style={{ animationDelay: '2s' }} />
      <div className="orb w-64 h-64 bg-cyber-purple bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
    </div>
  )
}

// Navigation component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cmg-green to-neon-blue flex items-center justify-center font-bold text-white">
            CX
          </div>
          <span className="font-semibold text-lg hidden sm:block">Sprint Release</span>
        </div>
        <div className="flex items-center gap-2">
          {['SmartApp', 'Portal', 'Servicing', 'Team'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm text-gray-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="feature-badge px-4 py-1.5 rounded-full text-sm font-medium">
              <Sparkles className="inline w-4 h-4 mr-1" />
              Sprint 2026.01.28
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Consumer Experience</span>
            <br />
            <span className="text-white">Release Notes</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Delivering enhancements across SmartApp, Home Portal tasks, and servicing functionality—
            focusing on regulatory compliance, user experience improvements, and document management.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { icon: Smartphone, label: 'SmartApp', count: '2 Features' },
              { icon: FileText, label: 'Portal Tasks', count: '4 Features' },
              { icon: Home, label: 'Home Portal', count: '3 Features' },
              { icon: Shield, label: 'Servicing', count: '7 Features' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card px-6 py-4 rounded-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cmg-green/20 to-neon-blue/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-cmg-green" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.count}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 mx-auto text-cmg-green" />
        </motion.div>
      </div>
    </section>
  )
}

// Feature Card Component
interface FeatureCardProps {
  ticketId: string
  title: string
  description: string
  status: 'new' | 'enhanced' | 'fix'
  details?: string[]
  image?: string
}

const FeatureCard = ({ ticketId, title, description, status, details, image }: FeatureCardProps) => {
  const [expanded, setExpanded] = useState(false)

  const statusStyles = {
    new: 'status-new',
    enhanced: 'status-enhanced',
    fix: 'status-fix',
  }

  const statusLabels = {
    new: 'NEW',
    enhanced: 'ENHANCED',
    fix: 'FIX',
  }

  return (
    <motion.div
      layout
      className="glass-card rounded-2xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className={`${statusStyles[status]} px-3 py-1 rounded-full text-xs font-bold`}>
              {statusLabels[status]}
            </span>
            <span className="ticket-id">#{ticketId}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {details && details.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-cmg-green text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            {expanded ? 'Show less' : 'View details'}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        )}

        <AnimatePresence>
          {expanded && details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cmg-green mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {image && (
        <div className="px-6 pb-6">
          <div className="screenshot-container">
            <div className="bg-gray-800 pt-8 pb-4 px-4">
              <div className="bg-white rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

// Section Header Component
interface SectionHeaderProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  id: string
}

const SectionHeader = ({ icon: Icon, title, description, id }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
      id={id}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cmg-green/20 to-neon-blue/20 flex items-center justify-center mx-auto mb-6 neon-border">
        <Icon className="w-8 h-8 text-cmg-green" />
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      <div className="section-divider w-48 mx-auto mt-8" />
    </motion.div>
  )
}

// SmartApp Section
const SmartAppSection = () => {
  return (
    <section className="py-24 relative" id="smartapp">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={Smartphone}
          title="SmartApp"
          description="TCPA-compliant phone consent messaging with enhanced privacy controls"
          id="smartapp-header"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            ticketId="78782"
            title="Updated Phone Consent for Primary Borrower"
            status="enhanced"
            description="TCPA-compliant consent messaging with scrollable text box and modal terms."
            details={[
              'New scrollable consent text with clear opt-in language',
              'Clickable "terms" opens full Telephone and Communication Preferences modal',
              'Privacy Policy opens in new tab to cmghomeloans.com/corporate/privacy-policy',
              'Mentions autodialed, prerecorded, and AI-generated messages',
              'Includes ESIGN compliance acknowledgment',
              'Opt-out instructions (STOP, account preferences, customer service)',
            ]}
          />

          <FeatureCard
            ticketId="91498"
            title="Co-Borrower Phone Type & Consent"
            status="new"
            description="Extended TCPA consent messaging to co-borrower information page."
            details={[
              'Phone Type field with Mobile/Home/Work options',
              'Same scrollable consent text as primary borrower',
              'Terms modal with full legal disclosure',
              'Privacy Policy link opens in new tab',
              'Checkbox required for consent acknowledgment',
            ]}
          />
        </div>

        {/* Visual Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-cmg-green" />
              Consent Flow Preview
            </h3>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Phone #</label>
                  <div className="bg-gray-800 rounded-lg px-4 py-3 text-gray-300">(276) 219-3197</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Phone Type:</label>
                  <div className="flex gap-4">
                    {['Mobile', 'Home', 'Work'].map((type, i) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <div className={`w-4 h-4 rounded-full border-2 ${i === 0 ? 'bg-cmg-green border-cmg-green' : 'border-gray-500'}`} />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-4 border border-cmg-green/20">
                  <div className="w-5 h-5 rounded bg-cmg-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    By entering my mobile number or other phone number and checking the box, I agree to receiving text and voice communications (including using autodialed or prerecorded messages) related to reminders, offers, and other information from CMG Mortgage, Inc. dba CMG Home Loans... View our <span className="text-cmg-green underline">terms</span> and <span className="text-cmg-green underline">Privacy Policy</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Portal Tasks Section
const PortalTasksSection = () => {
  return (
    <section className="py-24 relative" id="portal">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={FileText}
          title="Home Portal – Tasks"
          description="Docutech eSign integration and enhanced document upload workflows"
          id="portal-header"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            ticketId="69460"
            title="Docutech eSign Tasks Action Page"
            status="new"
            description="View and electronically sign loan disclosures directly from the Home Portal."
            details={[
              'New eSign task type in Tasks view',
              'View and Complete tabs for task status',
              'Direct integration with Docutech signing room',
              'Tasks show borrower name assignment',
              'Completed date tracking',
            ]}
          />

          <FeatureCard
            ticketId="79993"
            title="Solex eSigning Room Integration"
            status="new"
            description="Complete disclosure package signing directly through the Home Portal&apos;s eSign Action Page."
            details={[
              'Step-by-step signing instructions',
              'Opens CMG Solex signing room in new window',
              'Status updates from Pending to Complete automatically',
              'Uses EPS Disclosure data API response',
              '"Done" button to return to tasks',
            ]}
          />

          <FeatureCard
            ticketId="87188"
            title="Enhanced Document Upload Workflow"
            status="enhanced"
            description="More accurate borrower targeting via enhanced Clear Docs API and EPS API."
            details={[
              'Borrower identification via email matching logic',
              'Display correct Document Requests based on Application ID(s)',
              'Support for multi-application scenarios',
              'Support for multi-match scenarios',
              '"Assigned To" populated from API response',
            ]}
          />

          <FeatureCard
            ticketId="89824"
            title="Doc Type Display for Completed Tasks"
            status="enhanced"
            description="Completed upload tasks now show associated document types."
            details={[
              'Removed "Added <date>" from Completed View',
              'New "File(s) Received" title below Task Completed banner',
              'Document Type List based on associated request',
              'Clear Docs API returns DocType per document',
            ]}
          />
        </div>

        {/* Task Flow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-cmg-green" />
              Task Completion Flow
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { status: 'Pending', color: 'yellow', icon: FileText, desc: 'Task awaiting action' },
                { status: 'In Progress', color: 'blue', icon: Upload, desc: 'Signing or uploading' },
                { status: 'Complete', color: 'green', icon: Check, desc: 'Task finished' },
              ].map((step, i) => (
                <div key={step.status} className="relative">
                  <div className={`bg-gray-900/50 rounded-xl p-6 border ${
                    step.color === 'green' ? 'border-cmg-green/30' :
                    step.color === 'blue' ? 'border-neon-blue/30' :
                    'border-yellow-500/30'
                  }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      step.color === 'green' ? 'bg-cmg-green/20' :
                      step.color === 'blue' ? 'bg-neon-blue/20' :
                      'bg-yellow-500/20'
                    }`}>
                      <step.icon className={`w-6 h-6 ${
                        step.color === 'green' ? 'text-cmg-green' :
                        step.color === 'blue' ? 'text-neon-blue' :
                        'text-yellow-500'
                      }`} />
                    </div>
                    <h4 className="font-semibold mb-1">{step.status}</h4>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-600 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Home Portal Section
const HomePortalSection = () => {
  const [showLoan, setShowLoan] = useState(false)

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={Home}
          title="Home Portal"
          description="Enhanced security and improved calculator accuracy"
          id="home-portal-header"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            ticketId="65133"
            title="Loan Number Masking"
            status="new"
            description="Loan numbers masked to last 4 digits by default with toggle visibility."
            details={[
              'Applies to Loan Application cards on primary dashboard',
              'Applies to Mortgage Account cards on primary dashboard',
              'Eye icon toggle to reveal/hide full number',
              'Works on Documents page',
              'Icon changes state based on visibility',
            ]}
          />

          <FeatureCard
            ticketId="86711"
            title="Verify Identity Navigation"
            status="enhanced"
            description="Users can navigate away from Verify Identity page and return later."
            details={[
              'Navigate to dashboard after redirect for servicing loans',
              'Return to Verify Identity later to complete verification',
              'Loan Application shows as post-funded until verified',
              'Improved user flexibility',
            ]}
          />

          <FeatureCard
            ticketId="92249"
            title="Mortgage Calculator Fix"
            status="fix"
            description="Fixed rounding for 1/8th point interest rates (.125, .375, .625, .875)."
            details={[
              'Corrected computational logic for precise calculations',
              'Updated to new calculator package version',
              'Consistent with expected financial standards',
            ]}
          />
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5 text-cmg-green" />
              Loan Number Masking Demo
            </h3>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Mortgage Account</p>
                  <div className="flex items-center gap-3">
                    <Home className="w-8 h-8 text-cmg-green" />
                    <div>
                      <p className="font-semibold">1685 Center Star Rd, Columbia, TN</p>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        Loan# {showLoan ? 'RWE54320000001' : '••••••0001'}
                        <button
                          onClick={() => setShowLoan(!showLoan)}
                          className="text-cmg-green hover:text-neon-blue transition-colors"
                        >
                          {showLoan ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cmg-green">$635,000.00</p>
                  <p className="text-sm text-gray-400">Loan Balance</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Servicing Section
const ServicingSection = () => {
  return (
    <section className="py-24 relative" id="servicing">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={Shield}
          title="Home Portal Servicing"
          description="Tax statements, new document types, and enhanced access controls"
          id="servicing-header"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            ticketId="92871"
            title="Form 1098 Pre-Delivery Banner"
            status="new"
            description="Blue announcement banner for tax statement preparation."
            details={[
              'Location: Top of screen on mortgage accounts',
              'Message indicates form is being prepared',
              'States availability in Documents Center by Jan 31',
              'Notes mailing will also be sent',
            ]}
          />

          <FeatureCard
            ticketId="92873"
            title="Form 1098 Post-Delivery Banner"
            status="new"
            description="Green announcement banner when tax statement is ready."
            details={[
              'Replaces blue banner after delivery',
              'Directs users to Documents Center',
              'Notes printed copy has been mailed',
              'Important notice about multiple 1098s',
              'Instructions to use most recent form',
            ]}
          />

          <FeatureCard
            ticketId="92003"
            title="Loan Amount → Loan Balance"
            status="enhanced"
            description="Label change on Mortgage Account cards for clarity."
            details={[
              'Changed from "Loan Amount" to "Loan Balance"',
              'Applies to primary dashboard cards',
              'Works for Cenlar and LoanServ loans',
            ]}
          />

          <FeatureCard
            ticketId="90377"
            title="10 New Document Types"
            status="new"
            description="Expanded document support including appraisals, disclosures, and tax forms."
            details={[
              'Funding Package (Closing category)',
              'Appraisal (Valuation category)',
              'Closing Disclosure – Final (Closing category)',
              'MI Removal Denial Notice (Insurance)',
              'MI Removal/Cancellation Approval (Insurance)',
              'MI Removal Confirmation Notice (Insurance)',
              'IRS 1099-MISC (Borrower category)',
              'IRS Form 1099-A (Compliance)',
              'IRS Form 1099-C (Compliance)',
              'Filter by document type available',
            ]}
          />

          <FeatureCard
            ticketId="92256"
            title="Co-Borrower SSN Search"
            status="enhanced"
            description="Extended SSN search to include co-borrowers for dashboard access."
            details={[
              'Users not as primary borrower can now access dashboard',
              'Works when borrower roles changed during application',
              'Requires successful identity verification',
              'Full dashboard access without restriction',
            ]}
          />

          <FeatureCard
            ticketId="90375"
            title="Updated No Documents Message"
            status="enhanced"
            description="Improved messaging when loan documents aren't yet available."
            details={[
              'New message explains documents are being loaded',
              'Sets expectation: ~10 business days from close',
              'Error state shows red alert with refresh suggestion',
            ]}
          />

          <FeatureCard
            ticketId="92082"
            title="Aspen Grove Widgets Upgrade"
            status="enhanced"
            description="Updated widget library to version 1.50.0."
            details={[
              'Performance improvements',
              'Bug fixes and enhancements',
              'Latest features enabled',
            ]}
          />
        </div>

        {/* Banner Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 space-y-6"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-cmg-green" />
              Tax Statement Banners
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-sm">i</span>
                </div>
                <p className="text-sm text-blue-100">
                  <strong>Your complete Form 1098 tax statement is being prepared.</strong> It will be mailed to you and available in the Documents Center by January 31.
                </p>
              </div>
              <div className="bg-cmg-green/10 border border-cmg-green/30 rounded-lg p-4 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cmg-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-cmg-green" />
                </div>
                <div className="text-sm text-green-100">
                  <p><strong>Your Form 1098 tax statement is ready.</strong> View or download it now from the Documents Center. A printed copy has also been mailed.</p>
                  <p className="mt-2 text-yellow-300/80 text-xs">
                    ⚠️ <strong>IMPORTANT</strong> - If you received more than one Form 1098 from CMG for this loan: Please use only the most recent form in the Documents Center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Team Section
const TeamSection = () => {
  const teams = [
    {
      name: 'Product',
      color: 'cmg-green',
      members: [
        { name: 'Dave Perras', title: 'Senior Product Manager' },
        { name: 'Brooke Terry', title: 'Senior Business Analyst' },
        { name: 'Cathy Hodgson', title: 'Senior Business Analyst' },
        { name: 'Alexandra Zajaczkowski', title: 'Lead Tech Business Analyst' },
        { name: 'Silvia Ledo', title: 'Business Analyst' },
        { name: 'Yaskara Rabelo', title: 'Business Analyst' },
        { name: 'Kelli Jablonsky', title: 'Business Analyst' },
      ],
    },
    {
      name: 'Development',
      color: 'neon-blue',
      members: [
        { name: 'Stephen Colvin', title: 'Software Engineering Manager' },
        { name: 'Cory Chandler', title: 'Principal Front End Developer' },
        { name: 'Ashwin Ramathirtham', title: 'Senior Full Stack Developer' },
        { name: 'Scott McChesney', title: 'Principal Software Engineer' },
      ],
    },
    {
      name: 'Quality Assurance',
      color: 'cyber-purple',
      members: [
        { name: 'Matt Moreira', title: 'Quality Assurance Manager' },
        { name: 'Ben Morgen', title: 'Senior QA Analyst' },
      ],
    },
    {
      name: 'Experience Design',
      color: 'yellow',
      members: [
        { name: 'Andy Garcia', title: 'VP, Experience Design' },
        { name: 'Jon Hyzy', title: 'Experience Design Lead' },
      ],
    },
  ]

  return (
    <section className="py-24 relative" id="team">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={Users}
          title="CX Team"
          description="The talented team behind this sprint release"
          id="team-header"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, teamIdx) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: teamIdx * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className={`text-lg font-semibold mb-4 ${
                team.color === 'cmg-green' ? 'text-cmg-green' :
                team.color === 'neon-blue' ? 'text-neon-blue' :
                team.color === 'cyber-purple' ? 'text-cyber-purple' :
                'text-yellow-400'
              }`}>
                {team.name}
              </h3>
              <div className="space-y-3">
                {team.members.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      team.color === 'cmg-green' ? 'bg-cmg-green/20 text-cmg-green' :
                      team.color === 'neon-blue' ? 'bg-neon-blue/20 text-neon-blue' :
                      team.color === 'cyber-purple' ? 'bg-cyber-purple/20 text-cyber-purple' :
                      'bg-yellow-400/20 text-yellow-400'
                    }`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cmg-green to-neon-blue flex items-center justify-center font-bold text-white">
              CMG
            </div>
            <div>
              <p className="font-semibold">CMG Home Loans</p>
              <p className="text-xs text-gray-500">Consumer Experience Team</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              Sprint Release 2026.01.28 • <span className="text-gray-600">CONFIDENTIAL</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              © {new Date().getFullYear()} CMG Mortgage, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <SmartAppSection />
      <PortalTasksSection />
      <HomePortalSection />
      <ServicingSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
