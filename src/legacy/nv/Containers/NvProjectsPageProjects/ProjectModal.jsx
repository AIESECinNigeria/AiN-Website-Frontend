"use client";
import React from 'react';
// Let's create a simpler dialog without relying on shadcn/ui components
import { useRouter } from 'next/navigation';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const titleStyle = {
    fontFamily: 'Kind Sans Medium, Kind Sans Regular, Kind Sans, sans-serif',
    fontWeight: 500,
  };

  const labelStyle = {
    fontFamily: 'Kind Sans Medium, Kind Sans Regular, Kind Sans, sans-serif',
    fontWeight: 500,
  };

  const bodyStyle = {
    fontFamily: 'Kind Sans Regular, Kind Sans, sans-serif',
    fontWeight: 400,
  };

  const router = useRouter();

  if (!project) return null;

  const handleApplyClick = () => {
    router.push('/nv/sign-up');
  };

  // Function to split requirements into list items
  const formatRequirements = (reqText) => {
    if (!reqText) return [];
    return reqText.split(',').map(item => item.trim());
  };

  // Function to split side attractions into list items
  const formatSideAttractions = (sideText) => {
    if (!sideText) return [];
    return sideText.split(',').map(item => item.trim());
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-[500px] max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2
            className="text-3xl font-bold"
            style={{
              ...titleStyle,
              textTransform: 'uppercase',
            }}
          >
            {project.title}
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6" style={bodyStyle}>
          <div>
            <h3 className="text-xl font-bold" style={labelStyle}>Location:</h3>
            <p style={bodyStyle}>{project.location}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold" style={labelStyle}>Project Description:</h3>
            <p className="text-sm leading-relaxed" style={bodyStyle}>{project.desc}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold" style={labelStyle}>Project Requirements:</h3>
            {project.req ? (
                <ul className="list-disc pl-6 space-y-1" style={bodyStyle}>
                {formatRequirements(project.req).map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
                </ul>
            ) : (
                <p style={bodyStyle}>Nil</p>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold" style={labelStyle}>Side Attractions:</h3>
            <ul className="list-disc pl-6 space-y-1" style={bodyStyle}>
              {formatSideAttractions(project.side).map((side, index) => (
                <li key={index}>{side}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold" style={labelStyle}>Working Hours:</h3>
            <p style={bodyStyle}>{project.hours}</p>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold" style={labelStyle}>Duration:</h3>
            <p style={bodyStyle}>{project.duration}</p>
          </div>
        </div>

        {/* Apply button */}
        <div className="mt-6 flex justify-center">
          <div
            onClick={handleApplyClick}
            className="bg-[#08841B] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#06660F] transition-colors"
            style={labelStyle}
          >
            Apply Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
