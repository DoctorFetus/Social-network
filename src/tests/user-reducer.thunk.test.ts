import {ResultCodes, usersAPI} from "../api/api";
import {
    acceptFollowUser,
    acceptUnfollowUser,
    followUnfollowUser,
    toggleIsFollowing
} from "../redux/redusers/users-reducer";

jest.mock("../api/api");

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

test('follow user thunk', async () => {
    const mockFollowUser = jest.fn().mockResolvedValue({
        resultCode: ResultCodes.OK,
        messages: [],
        data: {}
    });

    userAPIMock.followUser = mockFollowUser;

    const thunk = acceptFollowUser(1);
    const dispatch = jest.fn();
    await thunk(dispatch);
    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, toggleIsFollowing(1, true))
    expect(dispatch).toHaveBeenNthCalledWith(2, followUnfollowUser(1, true))
    expect(dispatch).toHaveBeenNthCalledWith(3, toggleIsFollowing(1, false))

});

test('unfollow user thunk', async () => {
    const mockUnfollowUser = jest.fn().mockResolvedValue({
        resultCode: ResultCodes.OK,
        messages: [],
        data: {}
    });

    userAPIMock.unfollowUser = mockUnfollowUser;

    const thunk = acceptUnfollowUser(1);
    const dispatch = jest.fn();
    await thunk(dispatch);
    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, toggleIsFollowing(1, true))
    expect(dispatch).toHaveBeenNthCalledWith(2, followUnfollowUser(1, false))
    expect(dispatch).toHaveBeenNthCalledWith(3, toggleIsFollowing(1, false))

});
