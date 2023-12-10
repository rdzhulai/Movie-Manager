import { FormikProps } from "formik";

export interface MainPageFormValuesType {
    movieId: string | undefined;
    movieName: string;
    movieStudioId: string;
    movieSeriesId: string;
    movieSeriesNumber: string;
    movieActorAvailableId: string | undefined;
    movieActorSelectedId: string | undefined;
    movieCategories: string[] | undefined;
}

export interface MovieSectionProps {
    formik: FormikProps<MainPageFormValuesType>;
}