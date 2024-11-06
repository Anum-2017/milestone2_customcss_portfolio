import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl?: string;
  previewUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl = "#",
  previewUrl = "#"
}) => {

  if (!imgUrl || !title || !description) {
    return null;
  }

  return (
    <div className="project-card">
      <div className="project-card__image-container project-card__image-container--large">
        <div
          className="project-card__image-background"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="project-card__overlay">
            <Link href={gitUrl} className="project-card__icon-link">
              <CodeBracketIcon className="project-card__icon" />
            </Link>
            <Link href={previewUrl} className="project-card__icon-link">
              <EyeIcon className="project-card__icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="project-card__content">
        <h5 className="project-card__title">{title}</h5>
        <p className="project-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
