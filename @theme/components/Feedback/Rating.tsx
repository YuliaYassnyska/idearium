import * as React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

import type { ReasonsProps } from '@redocly/theme/components/Feedback/Reasons';

import { useThemeHooks } from '@redocly/theme/core/hooks';
import { RadioCheckButtonIcon } from '@redocly/theme/icons/RadioCheckButtonIcon/RadioCheckButtonIcon';
import { Comment } from '@redocly/theme/components/Feedback/Comment';
import { Reasons } from '@redocly/theme/components/Feedback/Reasons';
import { Stars } from '@redocly/theme/components/Feedback/Stars';
import { Button } from '@redocly/theme/components/Button/Button';

export const FEEDBACK_MAX_RATING = 3;

export type RatingProps = {
  onSubmit: (value: { score: number; comment?: string; reasons?: string[]; max: number }) => void;
  settings?: {
    label?: string;
    submitText?: string;
    comment?: {
      hide?: boolean;
      label?: string;
    };
    reasons?: {
      hide?: boolean;
      label?: string;
      component?: string;
      items: string[];
    };
  };
  className?: string;
};

export function Rating({ settings, onSubmit, className }: RatingProps): JSX.Element {
  const { label, submitText, comment: commentSettings, reasons: reasonsSettings } = settings || {};
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [reasons, setReasons] = React.useState([] as ReasonsProps['settings']['items']);
  const [comment, setComment] = React.useState('');
  const { useTranslate } = useThemeHooks();
  const { translate } = useTranslate();

  const onSubmitRatingForm = () => {
    onSubmit({
      score,
      comment,
      reasons,
      max: FEEDBACK_MAX_RATING,
    });
    setIsSubmitted(true);
  };

  const onCancelRatingForm = () => {
    setScore(0);
  };

  const displayReasons = !!(score && reasonsSettings && !reasonsSettings.hide);
  const displayComment = !!(score && !commentSettings?.hide);
  const displaySubmitBnt = !!(score && (displayReasons || displayComment));

  useEffect(() => {
    if (score && !displayComment && !displayReasons) {
      onSubmitRatingForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, displayComment, displayReasons]);

  if (isSubmitted) {
    return (
      <RatingWrapper data-component-name="Feedback/Rating">
        <StyledFormMandatoryFields>
          <Label data-translation-key="feedback.settings.submitText">
            {submitText ||
              translate(
                'feedback.settings.submitText',
                'Thank you for helping improve our documentation!',
              )}
          </Label>
          <RadioCheckButtonIcon />
        </StyledFormMandatoryFields>
      </RatingWrapper>
    );
  }

  return (
    <RatingWrapper data-component-name="Feedback/Rating" className={className}>
      <StyledForm>
        <StyledFormMandatoryFields>
          <Label data-translation-key="feedback.settings.label">
            {label || translate('feedback.settings.label', 'Was this helpful?')}
          </Label>

          <StyledMandatoryFieldContainer>
            <Stars max={FEEDBACK_MAX_RATING} onChange={setScore} value={score} />
          </StyledMandatoryFieldContainer>
        </StyledFormMandatoryFields>

        {(displayReasons || displayComment) && (
          <StyledFormOptionalFields>
            {displayReasons && (
              <Reasons
                settings={{
                  label: reasonsSettings?.label,
                  items: reasonsSettings?.items || [],
                  component: reasonsSettings?.component,
                }}
                onChange={setReasons}
              />
            )}

            {displayComment && (
              <Comment
                standAlone={false}
                onSubmit={({ comment }) => setComment(comment)}
                settings={{
                  label:
                    commentSettings?.label ||
                    translate(
                      'feedback.settings.comment.label',
                      'Please share your feedback with us.',
                    ),
                }}
              />
            )}
          </StyledFormOptionalFields>
        )}
        {displaySubmitBnt && (
          <ButtonsContainer>
            <Button onClick={onCancelRatingForm} variant="text" size="small">
              Cancel
            </Button>
            <Button onClick={onSubmitRatingForm} variant="secondary" size="small">
              Submit
            </Button>
          </ButtonsContainer>
        )}
      </StyledForm>
    </RatingWrapper>
  );
}

const StyledForm = styled.form`
  width: 100%;
  gap: var(--spacing-sm);
  display: flex;
  flex-direction: column;
`;

const StyledFormOptionalFields = styled.div`
  display: flex;
  flex-flow: column;
`;

const StyledFormMandatoryFields = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xs);
`;

const StyledMandatoryFieldContainer = styled.div`
  display: flex;
`;

const RatingWrapper = styled.div`
  font-family: var(--font-family-base);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.h4`
  font-family: var(--feedback-font-family);
  font-weight: var(--font-weight-regular);
  font-size: var(--feedback-header-font-size);
  line-height: var(--feedback-header-line-height);
  color: var(--feedback-header-text-color);
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: var(--spacing-xxs);
  gap: var(--spacing-xxs);
`;
