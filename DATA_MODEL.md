# Data Model / Future Google Sheet Mapping

## Dashboard research fields (currently in `js/data.js`)

`name`, `rank`, `fit`, `day`, `booth`, `geo`, `tags`, `track`, `why`, `evidence`, `roles`, `careers`, `job`/`research`, `story`, `question`, `question2`

These are relatively slow-changing company-research fields and belong in the dashboard.

## Future application-tracking fields (recommended Google Sheet)

`company_id`, `company`, `role`, `job_url`, `location`, `date_found`, `date_applied`, `resume_version`, `cover_letter_version`, `contact_name`, `contact_email`, `follow_up_date`, `interview_stage`, `next_action`, `status`, `notes`, `last_updated`

Use a stable `company_id` later if you want the website to merge Sheet status back into the dashboard.
