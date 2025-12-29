import { Response } from "express";

type MockResponse<TResult> = Response & {
    state: {
        status?: number;
        json?: TResult;
    };
}

    function makeMockResponse<TResult> () {
        const response = {
            state: {} 
        }  as MockResponse<TResult>;

        response.status = (status: number): MockResponse<TResult> => {
            response.state.status = status;
            return response;
        };
        response.json = (json: TResult): MockResponse<TResult> => {
            response.state.json = json;
            return response;
        }
        return response; 
    };

export { makeMockResponse };